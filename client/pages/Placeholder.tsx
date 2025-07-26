import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '').replace('-', ' ') || 'page';
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto text-center border-0 shadow-lg">
          <CardHeader>
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto text-muted-foreground">
              <Construction className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl capitalize">
              {pageName} Coming Soon
            </CardTitle>
            <CardDescription className="text-base">
              This page is currently under development. We're working hard to bring you an amazing experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Continue exploring other parts of FreshLink or get started with our platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
