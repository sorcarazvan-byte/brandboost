
import React from "react";
import { motion } from "framer-motion";
import {
  BarChart as BarChartIcon,
  TrendingUp,
  Users,
  MousePointerClick,
  ShoppingCart
} from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Clicks",
      value: "12,543",
      change: "+23.1%",
      icon: MousePointerClick
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+1.2%",
      icon: TrendingUp
    },
    {
      title: "Partner Sales",
      value: "$45,678",
      change: "+12.5%",
      icon: ShoppingCart
    },
    {
      title: "New Subscribers",
      value: "892",
      change: "+8.3%",
      icon: Users
    }
  ];

  const campaigns = [
    {
      name: "Summer Collection",
      clicks: 2345,
      conversions: 123,
      revenue: 4567
    },
    {
      name: "New Product Launch",
      clicks: 1876,
      conversions: 98,
      revenue: 3456
    },
    {
      name: "Holiday Special",
      clicks: 3421,
      conversions: 167,
      revenue: 6789
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <BarChartIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg border shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-primary" />
                <div className="text-right">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <p className="text-sm text-green-600">{metric.change}</p>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">{metric.title}</h3>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-6">Campaign Performance</h2>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.name}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-lg"
            >
              <div>
                <h3 className="font-medium">{campaign.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Clicks</p>
                <p className="font-medium">{campaign.clicks}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Conversions</p>
                <p className="font-medium">{campaign.conversions}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="font-medium">${campaign.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
