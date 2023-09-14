export default function InnerOutline(props: { children: React.ReactNode }) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        {props.children}
      </div>
    </div>
  );
}
