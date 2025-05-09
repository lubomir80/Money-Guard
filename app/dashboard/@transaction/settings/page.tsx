import { auth } from "@/auth";
import SettingsTabsContainer from "@/components/dashboard/settings/settings-tabs-container";
import { getAccountByUserId } from "@/data/account";



async function SettingsPage() {
   const session = await auth()
   const user = session?.user
   const account = await getAccountByUserId(session?.user?.id || "")
   const isAuthProvider = account?.length === 0 && user?.isOauth


   return (
      <div className="overflow-y-auto md:pr-2">
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">Settings</h2>
         <SettingsTabsContainer
            user={user}
            provider={isAuthProvider || false} />
      </div>
   )
}

export default SettingsPage