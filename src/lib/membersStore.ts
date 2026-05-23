import team1 from "@/assets/hirwa-franklin.jpg";
import team2 from "@/assets/niyirera-prince-louis.png";
import team3 from "@/assets/team-1.png";
import team4 from "@/assets/team-2.jpg";
import team5 from "@/assets/team-3.jpg";
import team6 from "@/assets/teta-queen.png";
import team7 from "@/assets/secretary.jpg";

export interface Member {
  id: string;
  name: string;
  role: string;
  img: string; // Base64, static asset URL, or public URL
  category: "Family" | "Organization" | "Other";
}

const LOCAL_STORAGE_KEY = "helpingishingiro_members";
export const MEMBERS_UPDATED_EVENT = "helpingishingiro_members_updated";

export const getInitialTeam = (): Member[] => [
  { id: "1", name: "Hirwa Franklin", role: "Founder & Director", img: team1, category: "Organization" },
  { id: "2", name: "Niyirera Prince Louis", role: "IT Manager", img: team2, category: "Organization" },
  { id: "3", name: "Ngenzi bruce", role: "Media manager", img: team6, category: "Organization" },
  { id: "4", name: "Teta Queen", role: "Secretary", img: team7, category: "Organization" },
  { id: "5", name: "kabundi Patrick", role: "Member", img: team3, category: "Family" },
  { id: "6", name: "Mutabazi Hannia", role: "Member", img: team4, category: "Family" },
  { id: "7", name: "Shima icyiza Bonheur", role: "Member", img: team5, category: "Family" },
];

export const getMembers = (): Member[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    const initial = getInitialTeam();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error parsing stored members", e);
    return getInitialTeam();
  }
};

export const saveMembers = (members: Member[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(members));
  window.dispatchEvent(new CustomEvent(MEMBERS_UPDATED_EVENT));
};

export const addMember = (member: Omit<Member, "id">) => {
  const members = getMembers();
  const newMember: Member = {
    ...member,
    id: Date.now().toString(),
  };
  members.push(newMember);
  saveMembers(members);
  return newMember;
};

export const deleteMember = (id: string) => {
  const members = getMembers();
  const filtered = members.filter((m) => m.id !== id);
  saveMembers(filtered);
};

export const updateMember = (updated: Member) => {
  const members = getMembers();
  const index = members.findIndex((m) => m.id === updated.id);
  if (index !== -1) {
    members[index] = updated;
    saveMembers(members);
  }
};
