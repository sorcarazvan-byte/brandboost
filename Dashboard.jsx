
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Mail,
  Users,
  TrendingUp,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Available Credits",
      value: "150",
      icon: CreditCard,
      change: "+12 this month"
    },
    {
      title: "Active Campaigns",
      value: "3",
      icon: Mail,
      change: "2 pending approval"
    },
    {
      title: "Network Partners",
      value: "28",
      icon: Users,
      change: "+5 new this week"
    },
    {
      title: "Avg. Click Rate",
      value: "4.2%",
      icon: TrendingUp,
      change: "+0.8% vs last month"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg border shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.change}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Campaigns</h2>
          {/* Campaign list will go here */}
        </div>
        <div className="p-6 bg-card rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recommended Partners</h2>
          {/* Partner recommendations will go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
