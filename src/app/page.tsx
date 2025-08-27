import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Manager App
          </h1>
          <p className="text-lg text-gray-600">
            Built with Next.js, Tailwind CSS, shadcn/ui, Prisma, and Clerk
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Next.js 15
              </CardTitle>
              <CardDescription>
                React framework with App Router and TypeScript
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Server-side rendering, API routes, and modern React features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Tailwind CSS
              </CardTitle>
              <CardDescription>
                Utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Responsive design with modern styling utilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧩 shadcn/ui
              </CardTitle>
              <CardDescription>
                Beautiful UI components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Accessible and customizable React components.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🗄️ Prisma
              </CardTitle>
              <CardDescription>
                Type-safe database ORM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Database schema management and type-safe queries.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔐 Clerk
              </CardTitle>
              <CardDescription>
                Authentication and user management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Complete authentication solution with user profiles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔧 Development Ready
              </CardTitle>
              <CardDescription>
                Environment configured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Environment variables and Git ignore properly set up.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Authentication Demo</CardTitle>
            <CardDescription>
              Test the Clerk authentication integration
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <SignedOut>
                <p className="text-gray-600 mb-4">You are not signed in</p>
                <SignInButton>
                  <Button>Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <p className="text-gray-600 mb-4">Welcome! You are signed in</p>
                <div className="flex items-center gap-4">
                  <UserButton />
                  <SignOutButton>
                    <Button variant="outline">Sign Out</Button>
                  </SignOutButton>
                </div>
              </SignedIn>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Get started with your Job Manager application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Set up your Clerk account and add your API keys to the .env file</li>
              <li>Configure your database connection in the .env file</li>
              <li>Run <code className="bg-gray-100 px-2 py-1 rounded">npx prisma migrate dev</code> to create your database</li>
              <li>Start building your job management features!</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
