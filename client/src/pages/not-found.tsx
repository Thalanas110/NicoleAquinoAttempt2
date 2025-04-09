import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <Card className="content-overlay w-full max-w-md mx-4 shadow-lg">
        <CardContent className="pt-6 text-center py-10">
          <div className="flex flex-col items-center mb-6">
            <AlertCircle className="h-12 w-12 text-accent-red mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-soft-green">404 Page Not Found</h1>
          </div>

          <p className="mt-4 mb-8 text-text-medium">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link href="/">
            <Button className="bg-soft-green hover:bg-dark-green text-white px-6 py-2 rounded-md transition-colors">
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
