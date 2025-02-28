"use client"

import { useActionState } from "react"
import { BsGithub } from "react-icons/bs"
import { Button } from "./ui/button"
import { githubAuthenticate } from "@/actions/github-login"


function GithubButton() {
   const [errorMsgGoogle, dispatchGoogle] = useActionState(githubAuthenticate, undefined)

   return (
      <form className="flex mt-4" action={dispatchGoogle}>
         <Button className="bg-[#3d225a] text-md flex flex-row items-center gap-2 w-full hover:bg-[#33194e] rounded-[15px]">
            <BsGithub />
            Github
         </Button>
         <p>{errorMsgGoogle}</p>
      </form>
   )
}

export default GithubButton