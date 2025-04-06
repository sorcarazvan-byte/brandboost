
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Settings as SettingsIcon, Mail, Key } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const [klaviyoKey, setKlaviyoKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveSettings = async () => {
    try {
      setLoading(true);
      // Save to Supabase or local storage
      localStorage.setItem("klaviyoApiKey", klaviyoKey);
      
      toast({
        title: "Settings saved",
        description: "Your API keys have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <SettingsIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6 max-w-xl">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Email Integration</h2>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="klaviyo-key">Klaviyo Private API Key</Label>
            <Input
              id="klaviyo-key"
              type="password"
              value={klaviyoKey}
              onChange={(e) => setKlaviyoKey(e.target.value)}
              placeholder="pk_xxxxxxxxxxxxxxxxxxxxxxxx"
            />
            <p className="text-sm text-muted-foreground">
              Your Klaviyo Private API key is required to sync your subscriber lists and send campaigns.
            </p>
          </div>
        </div>

        <Button
          onClick={handleSaveSettings}
          disabled={loading}
          className="w-full md:w-auto"
        >
          {loading ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </div>
  );
};

export default Settings;
