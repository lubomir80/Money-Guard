import { UserProps } from '@/types'
import UserSettingsForm from './user-settings-form'
import UserAvatar from './UserAvatar'





function Settings({ user }: UserProps) {
   if (!user) return null

   return (
      <div className='flex flex-col gap-10 pb-10
      sm:flex-row'>
         <UserAvatar user={user} />
         <UserSettingsForm user={user} />
      </div>
   )
}

export default Settings