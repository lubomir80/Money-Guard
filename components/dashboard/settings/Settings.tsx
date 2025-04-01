import { auth } from '@/auth'
import { getAccountByUserId } from '@/data/account'
import UserSettingsForm from './user-settings-form'
import UserAvatar from './UserAvatar'
import ProviderMessage from './ProviderMessage';



async function Settings() {
   const session = await auth()
   const user = session?.user

   const checkProvider = await getAccountByUserId(session?.user?.id || "")



   return (
      <div className='flex flex-col gap-10 pb-10
      sm:flex-row'>
         <UserAvatar user={user} />
         {!checkProvider && user?.isOauth ?
            <UserSettingsForm user={user} /> :
            <ProviderMessage />}
      </div>
   )
}

export default Settings