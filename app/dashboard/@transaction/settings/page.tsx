import { auth } from "@/auth";
import SettingsTabsContainer from "@/components/dashboard/settings/settings-tabs-container";
// import Settings from "@/components/dashboard/settings/Settings";


async function SettingsPage() {
   const session = await auth()
   const user = session?.user


   return (
      <div className="overflow-y-auto md:pr-2">
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">Settings</h2>
         {/* <Settings /> */}
         <SettingsTabsContainer user={user} />
      </div>
   )
}

export default SettingsPage