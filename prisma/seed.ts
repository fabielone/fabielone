import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "mia@blindsbaja.com";
  const email2 = "fabiel@blindsbaja.com";
  const email3 = "frida@blindsbaja.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("password10", 10);
  const hashedPassword2 = await bcrypt.hash("password20", 10);

  const user = await prisma.user.create({
    data: {
      email:email,
      role:"admin",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
     
    data: {
      email:email2,
      role:"admin",
      password: {
        create: {
          hash: hashedPassword2,
        },
      },
    },
  });

  const user3 = await prisma.user.create({
     
    data: {
      email:email3,
      role:"admin",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });


  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const prospect1 = await prisma.prospect.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "1234567890",
      status: "NEW",
    },
  });

  const prospect2 = await prisma.prospect.create({
    data: {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "9876543210",
      status: "NEW",
    },
  });

  // Create inventory items
  await prisma.inventoryItem.create({
    data: {
      name: "Window Blind",
      description: "Blackout Blind",
      quantity: 10,
      unitPrice: 50,
      totalValue: 500,
      cost: 30,
      userId: user.id,
      prospectId: prospect1.id,
    },
  });

  await prisma.inventoryItem.create({
    data: {
      name: "Curtains",
      description: "Red Curtains",
      quantity: 5,
      unitPrice: 70,
      totalValue: 350,
      cost: 40,
      userId: user2.id,
      prospectId: prospect2.id,
    },
  });

  // Create estimates
  const estimate1 = await prisma.estimate.create({
    data: {
      totalPrice: 1000,
      userId: user.id,
      prospectId: prospect1.id,
    },
  });

  const estimate2 = await prisma.estimate.create({
    data: {
      totalPrice: 800,
      userId: user2.id,
      prospectId: prospect2.id,
    },
  });

  // Create sections
  const livingroom =await prisma.section.create({
    data: {
      sectionName: "Living Room",
      estimateId: estimate1.id,
    },
  });

  const bedroom = await prisma.section.create({
    data: {
      sectionName: "Bedroom",
      estimateId: estimate1.id,
    },
  });

  const kitchen =  await prisma.section.create({
    data: {
      sectionName: "Kitchen",
      estimateId: estimate2.id,
    },
  });

  const bathroom = await prisma.section.create({
    data: {
      sectionName: "Bathroom",
      estimateId: estimate2.id,
    },
  });

  // Create windows
  const window1 = await prisma.window.create({
    data: {
      width: 60,
      height: 40,
      insideFrame: true,
      blindType: "Roller Blind",
      blindColor: "White",
      sectionId: livingroom.id,
    },
  });

  const window2 = await prisma.window.create({
    data: {
      width: 50,
      height: 30,
      insideFrame: false,
      blindType: "Venetian Blind",
      blindColor: "Silver",
      sectionId: kitchen.id,
    },
  });

  const window3 = await prisma.window.create({
    data: {
      width: 40,
      height: 30,
      insideFrame: true,
      blindType: "Roman Blind",
      blindColor: "Blue",
      sectionId: bedroom.id,
    },
  });

  const window4 = await prisma.window.create({
    data: {
      width: 70,
      height: 50,
      insideFrame: false,
      blindType: "Vertical Blind",
      blindColor: "Beige",
      sectionId: bedroom.id,
    },
  });

  // Create photos
  await prisma.photo.create({
    data: {
      imageURL: "https://example.com/photo1.jpg",
      prospectId: prospect1.id,
    },
  });

  await prisma.photo.create({
    data: {
      imageURL: "https://example.com/photo2.jpg",
      prospectId: prospect2.id,
    },
  });

  // Create sales
  const sale1 = await prisma.sale.create({
    data: {
      status: "CONFIRMED",
      signatureURL: "https://example.com/signature1.jpg",
      email: "john@example.com",
      discount: 10,
      userId: user.id,
      prospectId: prospect1.id  ,
    },
  });

  const sale2 = await prisma.sale.create({
    data: {
      status: "SCHEDULED",
      signatureURL: "https://example.com/signature2.jpg",
      email: "jane@example.com",
      discount: 5,
      userId: user2.id,
      prospectId: prospect2.id,
    },
  });

  // Create productions
  await prisma.production.create({
    data: {
      status: "RECEIVED",
      saleId: sale1.id,
    },
  });

  await prisma.production.create({
    data: {
      status: "NOT_RECEIVED",
      saleId: sale2.id,
    },
  });

  // Create appointments
  const appointment1 =  await prisma.appointment.create({
    data: {
      status: "CONFIRMED",
      appointmentDate: "2023-07-30T10:00:00Z",
      prospectId: prospect1.id,
      userId: user.id,  
    },
  });

  const appointment2 = await prisma.appointment.create({
    data: {
      status: "RESCHEDULED",
      appointmentDate: "2023-07-31T14:00:00Z",
      prospectId: prospect2.id,
      userId: user2.id, 
    },
  });

  // Create installations
  await prisma.installation.create({
    data: {
      address: "123 Main St",
      appointmentId: appointment1.id,
      installerId: user.id,
      prospectId: prospect1.id,
      
    },
  });

  await prisma.installation.create({
    data: {
      address: "456 Oak Ave",
      appointmentId: appointment2.id,
      installerId: user2.id,  
      prospectId: prospect2.id,
    },
  });

  // Create reviews
  await prisma.review.create({
    data: {
      rating: 4,
      comment: "Great service!",
      prospectId: prospect1.id,
    },
  });

  await prisma.review.create({
    data: {
      rating: 5,
      comment: "Excellent work!",
      prospectId: prospect2.id,
    },
  });

  // Create surveys
  await prisma.survey.create({
    data: {
      satisfactionRating: 4,
      salesProcessRating: 5,
      installationRating: 4,
      review: "Very satisfied!",
      prospectId: prospect1.id  ,
    },
  });

  await prisma.survey.create({
    data: {
      satisfactionRating: 5,
      salesProcessRating: 4,
      installationRating: 5,
      review: "Extremely happy!",
      prospectId: prospect2.id,
    },
  });

  // Create expenses
  await prisma.expense.create({
    data: {
      name: "Travel Expense",
      description: "Gas and tolls",
      amount: 50,
      userId: user.id,
    },
  });

  await prisma.expense.create({
    data: {
      name: "Office Supplies",
      description: "Pens, paper, etc.",
      amount: 20,
      userId: user2.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
