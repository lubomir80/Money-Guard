import Settings from "@/components/dashboard/settings/Settings";


async function SettingsPage() {
   return (
      <>
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">User settings</h2>
         <Settings />
      </>
   )
}

export default SettingsPage