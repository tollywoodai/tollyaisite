import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Star, Zap } from "lucide-react";

const DailyUpdates = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const generateDailyContent = () => {
    const today = currentDate.toISOString().split('T')[0];
    const dayOfYear = Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / 86400000);
    
    const contentTemplates = [
      {
        type: "Market Update",
        title: `Telugu Film Market Cap Reaches $${(1.2 + (dayOfYear * 0.01)).toFixed(1)}B`,
        description: "Daily market analysis shows continued growth in regional cinema investments",
        metric: `+${(2 + (dayOfYear % 5)).toFixed(1)}%`,
        icon: TrendingUp
      },
      {
        type: "AI Innovation",
        title: `${150 + dayOfYear} New AI Tools Released This Year`,
        description: "Cutting-edge AI development accelerates in the entertainment industry",
        metric: "Live",
        icon: Zap
      },
      {
        type: "Success Story",
        title: `Independent Film Achieves $${(50 + (dayOfYear * 2))}K Revenue with AI`,
        description: "Another breakthrough showcases AI's impact on low-budget productions",
        metric: "Featured",
        icon: Star
      }
    ];

    return contentTemplates[dayOfYear % contentTemplates.length];
  };

  const todayContent = generateDailyContent();
  const Icon = todayContent.icon;

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg text-blue-900 dark:text-blue-100">Daily Market Pulse</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {currentDate.toLocaleDateString()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
            <Icon className="h-3 w-3 mr-1" />
            {todayContent.type}
          </Badge>
          <Badge className="text-xs bg-green-100 text-green-800 border-green-300">
            {todayContent.metric}
          </Badge>
        </div>
        
        <div>
          <h3 className="font-semibold text-base mb-2 text-blue-900 dark:text-blue-100">
            {todayContent.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {todayContent.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>Updated: {currentDate.toLocaleTimeString()}</span>
          <span className="text-blue-600 font-medium">Auto-refreshed</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyUpdates;