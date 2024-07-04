import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { GoogleStrategy } from "remix-auth-google";
import invariant from "tiny-invariant";

import { User, verifyLogin, getUserByEmail, createUserSocial } from "~/models/user.server";

import { sessionStorage } from "../session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email");
    const password = form.get("password");

    // Validate the inputs
    invariant(typeof email === "string", "Email must be a string");
    invariant(email.length > 0, "Email must not be empty");
    invariant(typeof password === "string", "Password must be a string");
    invariant(password.length > 0, "Password must not be empty");

    // Check if the user exists and verify the password
    const user = await verifyLogin(email, password);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Return the user as the Authenticator expects it
    return user;
  })
);

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID||'',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET||'',
      callbackURL: 'https://fabiel.one/auth/google/callback',
    },
    async ({  profile }) => {
        //accessToken, refreshToken, extraParams,
      // Check if the user exists in the database
      const email = profile.emails[0].value;
      let user = await getUserByEmail(email);

      if (!user) {
        user = await createUserSocial(email);      }

      // Optionally use the accessToken and refreshToken here
      // For example, you could store them in the database
      // await storeTokens(user.id, accessToken, refreshToken);

      // Or make an authorized request to the Google API
      // const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
      //   headers: { Authorization: `Bearer ${accessToken}` }
      // });
      // const profileData = await response.json();

      // Return the user as the Authenticator expects it
      return user;
    }
  )
);
