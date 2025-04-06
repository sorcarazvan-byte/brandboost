
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Store, Mail, Star } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Fashion Brand Co.",
      category: "Apparel",
      audience: 50000,
      rating: 4.8,
      campaigns: 12
    },
    {
      id: 2,
      name: "Eco Beauty",
      category: "Cosmetics",
      audience: 35000,
      rating: 4.6,
      campaigns: 8
    },
    {
      id: 3,
      name: "Tech Gadgets",
      category: "Electronics",
      audience: 75000,
      rating: 4.9,
      campaigns: 15
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Network Partners</h1>
        </div>
      </div>

      <div className="grid gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg border p-6"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{partner.name}</h2>
                <p className="text-sm text-muted-foreground">{partner.category}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{partner.rating}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Audience Size</p>
                  <p className="font-medium">{partner.audience.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Campaigns</p>
                  <p className="font-medium">{partner.campaigns}</p>
                </div>
              </div>

              <div className="md:text-right">
                <Button>View Details</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
