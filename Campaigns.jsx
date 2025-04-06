
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { klaviyoService } from "@/services/klaviyo";
import {
  Plus,
  Mail,
  Users,
  BarChart,
  ChevronRight,
  Link as LinkIcon
} from "lucide-react";

const Campaigns = () => {
  const { toast } = useToast();
  const [campaigns, setCampaigns] = useState([]);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [campaignData, setCampaignData] = useState({
    subject: "",
    previewText: "",
    template: "default",
  });

  const partners = [
    { id: 1, name: "Fashion Brand Co.", category: "Apparel", audience: 50000 },
    { id: 2, name: "Eco Beauty", category: "Cosmetics", audience: 35000 },
    { id: 3, name: "Tech Gadgets", category: "Electronics", audience: 75000 },
  ];

  const handleCreateCampaign = async () => {
    try {
      setLoading(true);
      // In a real implementation, this would send to Klaviyo
      const newCampaign = {
        ...campaignData,
        partner: selectedPartner,
        status: "scheduled",
        date: new Date().toISOString(),
      };
      
      setCampaigns([newCampaign, ...campaigns]);
      setShowNewCampaign(false);
      
      toast({
        title: "Campaign created",
        description: "Your campaign has been scheduled successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create campaign. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button onClick={() => setShowNewCampaign(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      {showNewCampaign ? (
        <div className="bg-card rounded-lg border p-6 space-y-6">
          <h2 className="text-xl font-semibold">Create New Campaign</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Campaign Subject</Label>
              <Input
                value={campaignData.subject}
                onChange={(e) => setCampaignData({...campaignData, subject: e.target.value})}
                placeholder="Enter campaign subject"
              />
            </div>

            <div className="space-y-2">
              <Label>Preview Text</Label>
              <Input
                value={campaignData.previewText}
                onChange={(e) => setCampaignData({...campaignData, previewText: e.target.value})}
                placeholder="Enter preview text"
              />
            </div>

            <div className="space-y-2">
              <Label>Select Partner to Promote</Label>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPartner?.id === partner.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <h3 className="font-medium">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.category}</p>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      {partner.audience.toLocaleString()} subscribers
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setShowNewCampaign(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateCampaign}
              disabled={loading || !selectedPartner || !campaignData.subject}
            >
              {loading ? "Creating..." : "Create Campaign"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-4 flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="font-medium">{campaign.subject}</h3>
                <p className="text-sm text-muted-foreground">
                  Promoting: {campaign.partner.name}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  {new Date(campaign.date).toLocaleDateString()}
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Campaigns;
