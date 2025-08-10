import { ArrowUp, ArrowDown, DollarSign, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';



const StatCard = ({ title, value, change, icon, description } ) => {
  const icons = {
    revenue: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    users: <Users className="h-4 w-4 text-muted-foreground" />,
    bookings: <Calendar className="h-4 w-4 text-muted-foreground" />,
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="p-2 rounded-lg bg-muted">{icons[icon]}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {change !== undefined && (
          <div className="mt-4">
            <Badge
              variant={change > 0 ? 'success' : change < 0 ? 'destructive' : 'secondary'}
              className="gap-1"
            >
              {change > 0 ? (
                <ArrowUp className="h-3 w-3" />
              ) : change < 0 ? (
                <ArrowDown className="h-3 w-3" />
              ) : null}
              {change === 0 ? 'No change' : `${Math.abs(change)}%`}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;