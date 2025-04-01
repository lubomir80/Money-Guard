import Settings from "@/components/dashboard/settings/Settings";




async function SettingsPage() {
   return (
      <div className="overflow-y-auto">
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">User settings</h2>
         <Settings />
      </div>
   )
}

export default SettingsPage