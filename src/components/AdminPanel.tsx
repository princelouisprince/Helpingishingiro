import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Unlock, 
  LogOut, 
  Plus, 
  Trash2, 
  User, 
  UserPlus, 
  Upload, 
  X, 
  Settings,
  Users,
  Eye,
  EyeOff
} from "lucide-react";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  getMembers, 
  addMember, 
  deleteMember, 
  Member 
} from "@/lib/membersStore";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState<"Family" | "Organization">("Family");
  const [roleType, setRoleType] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // List of members for admin management
  const [membersList, setMembersList] = useState<Member[]>([]);

  useEffect(() => {
    // Check if logged in already (sessionStorage)
    const savedLogin = sessionStorage.getItem("helpingishingiro_admin_logged");
    if (savedLogin === "true") {
      setIsLoggedIn(true);
    }
    
    // Load members list
    setMembersList(getMembers());
    
    const handleUpdate = () => {
      setMembersList(getMembers());
    };
    
    window.addEventListener("helpingishingiro_members_updated", handleUpdate);
    return () => {
      window.removeEventListener("helpingishingiro_members_updated", handleUpdate);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "princelouisprince@gmail.com" && password === "louis123") {
      setIsLoggedIn(true);
      sessionStorage.setItem("helpingishingiro_admin_logged", "true");
      toast.success("Admin authenticated successfully!");
      setPassword("");
      setEmail("");
    } else {
      toast.error("Invalid admin email or password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("helpingishingiro_admin_logged");
    toast.info("Logged out of Admin panel");
  };

  // Convert uploaded image file to Base64
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image file is too large! Please choose an image smaller than 2MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        toast.success("Image uploaded and processed!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter a name!");
      return;
    }

    const finalRole = roleType === "Custom" ? customRole : roleType;
    if (!finalRole.trim()) {
      toast.error("Please specify a role!");
      return;
    }

    addMember({
      name: name.trim(),
      role: finalRole.trim(),
      img: imagePreview || "",
      category: category
    });

    toast.success(`${name} has been added successfully!`);
    
    // Clear form
    setName("");
    setRoleType("");
    setCustomRole("");
    setImagePreview(null);
  };

  const handleDelete = (id: string, memberName: string) => {
    if (confirm(`Are you sure you want to remove ${memberName}?`)) {
      deleteMember(id);
      toast.success(`${memberName} has been removed.`);
    }
  };

  // Define quick-selection roles based on category
  const familyRoles = [
    "Father",
    "Mother",
    "Son",
    "Daughter",
    "Brother",
    "Sister",
    "Grandfather",
    "Grandmother",
    "Uncle",
    "Aunt",
    "Cousin",
    "Member",
    "Custom"
  ];

  const orgRoles = [
    "Founder & Director",
    "IT Manager",
    "Media manager",
    "Secretary",
    "Coordinator",
    "Volunteer Coordinator",
    "Sponsorship Officer",
    "Advisor",
    "Member",
    "Custom"
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Sleek Footer Admin Portal Button */}
      <SheetTrigger asChild>
        <button 
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/30 hover:text-primary-foreground/80 hover:scale-105 active:scale-95 transition-all duration-200 font-heading focus:outline-none focus:ring-1 focus:ring-primary-foreground/20 px-3 py-1.5 rounded-full border border-primary-foreground/10 hover:border-primary-foreground/30"
          aria-label="Admin Panel"
        >
          <Shield className="h-3.5 w-3.5" />
          <span>Admin Portal</span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md overflow-y-auto border-l bg-background/95 backdrop-blur-md flex flex-col p-0">
        {/* Header styling */}
        <div className="p-6 border-b bg-muted/30">
          <SheetHeader>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded bg-primary/10 text-primary">
                <Shield className="h-5 w-5 animate-pulse" />
              </div>
              <SheetTitle className="font-heading text-xl">Admin Control Center</SheetTitle>
            </div>
            <SheetDescription>
              {isLoggedIn 
                ? "Manage family and organizational members." 
                : "A secure access area for system administrators."}
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Dynamic Panels */}
        <div className="flex-1 p-6">
          {!isLoggedIn ? (
            /* Admin Auth Panel */
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleLogin} 
              className="space-y-5 py-4"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3 text-secondary">
                  <Lock className="h-8 w-8" />
                </div>
                <h4 className="font-heading text-lg font-semibold">Sign In to Dashboard</h4>
                <p className="text-xs text-muted-foreground mt-1">Please enter your credentials to authorize access.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-card/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <div className="relative">
                  <Input 
                    id="admin-password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-card/50 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-95 transition-opacity mt-4 font-heading">
                Authenticate Admin
              </Button>
            </motion.form>
          ) : (
            /* Logged In Dashboard Panels */
            <div className="space-y-8">
              {/* Section 1: Add Member Form */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-md">Add a Member</h4>
                </div>

                <form onSubmit={handleAddMember} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <Label htmlFor="member-name">Full Name</Label>
                    <Input 
                      id="member-name" 
                      placeholder="e.g. Prince Louis" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="member-category">Category / Group</Label>
                    <Select 
                      value={category} 
                      onValueChange={(val: "Family" | "Organization") => {
                        setCategory(val);
                        setRoleType("");
                      }}
                    >
                      <SelectTrigger id="member-category" className="bg-card/50">
                        <SelectValue placeholder="Select group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Family">Family / Household</SelectItem>
                        <SelectItem value="Organization">Organization Team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="member-role">Role Classification</Label>
                    <Select value={roleType} onValueChange={setRoleType}>
                      <SelectTrigger id="member-role" className="bg-card/50">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {(category === "Family" ? familyRoles : orgRoles).map((role) => (
                          <SelectItem key={role} value={role}>{role}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Custom Role Input (appears if "Custom" is selected) */}
                  {roleType === "Custom" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2 pt-1"
                    >
                      <Label htmlFor="member-custom-role">Enter Custom Role</Label>
                      <Input 
                        id="member-custom-role" 
                        placeholder="e.g. Great Uncle" 
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                        required
                      />
                    </motion.div>
                  )}

                  {/* Profile Picture Uploader */}
                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <div className="flex items-center gap-4">
                      {/* Image Preview Container */}
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-muted/50 flex items-center justify-center shrink-0">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover object-top" />
                        ) : (
                          <User className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <label className="flex items-center justify-center gap-2 border-2 border-dashed border-input rounded-md px-3 py-2 cursor-pointer hover:bg-muted/40 transition-colors text-sm text-muted-foreground font-heading">
                          <Upload className="h-4 w-4" />
                          <span>Upload Photo</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                        <p className="text-[10px] text-muted-foreground mt-1">PNG, JPG or WEBP (Max 2MB)</p>
                      </div>

                      {imagePreview && (
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => setImagePreview(null)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary font-heading flex items-center gap-2 mt-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Member</span>
                  </Button>
                </form>
              </div>

              {/* Section 2: Manage Members */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <h4 className="font-heading font-semibold text-foreground text-md">Manage Members ({membersList.length})</h4>
                </div>

                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  <AnimatePresence>
                    {membersList.map((m) => (
                      <motion.div 
                        key={m.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-3 p-3 bg-card border rounded-lg hover:border-primary/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full overflow-hidden border bg-muted flex items-center justify-center shrink-0">
                          {m.img ? (
                            <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                          ) : (
                            <span className="font-semibold text-xs text-primary">{m.name.substring(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-semibold truncate text-foreground">{m.name}</h5>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[10px] text-muted-foreground truncate">{m.role}</span>
                            <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                            <span className="text-[10px] font-medium text-secondary">{m.category || "Family"}</span>
                          </div>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                          onClick={() => handleDelete(m.id, m.name)}
                          aria-label={`Delete ${m.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {membersList.length === 0 && (
                    <div className="text-center py-6 text-muted-foreground text-sm">
                      No members registered. Try adding one!
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer/Logout bar when logged in */}
        {isLoggedIn && (
          <div className="p-4 border-t bg-muted/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-heading">Logged in as Admin</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-destructive hover:bg-destructive/10 border-destructive/20 hover:border-destructive flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default AdminPanel;
