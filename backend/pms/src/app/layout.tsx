export const metadata = {
  title: 'PMS - Project Management System',
  description: 'Project Management System built with Payload CMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Let the route group layouts handle the HTML structure
}
