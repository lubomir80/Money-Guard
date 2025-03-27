import { auth } from "@/auth"

import Settings from "@/components/dashboard/settings/Settings";


async function SettingsPage() {
   const session = await auth()
   const user = session?.user



   return (
      <>
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">User settings</h2>
         <Settings user={user} />
      </>
   )
}

export default SettingsPage