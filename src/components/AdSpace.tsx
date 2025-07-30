import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdSpace = ({ size = "medium", title = "Advertisement" }) => {
  const sizeClasses = {
    small: "h-24",
    medium: "h-32", 
    large: "h-48",
    banner: "h-20"
  };

  return (
    <Card className="bg-muted/20 border-dashed">
      <CardContent className={`p-4 ${sizeClasses[size]} flex flex-col items-center justify-center text-center`}>
        <p className="text-xs text-muted-foreground mb-2">{title}</p>
        <p className="text-sm font-medium mb-2">Ad Space {size}</p>
        <Button variant="outline" size="sm" className="text-xs">
          Advertise Here
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdSpace;