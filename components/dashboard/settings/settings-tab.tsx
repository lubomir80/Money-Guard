import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"



type SettingsTabProps = {
   value: string,
   title: string,
   description?: string,
   trigger?: string,
   accordionText?: string,
   descriptionOrange?: string,
   children: React.ReactNode
}

function SettingsTab({
   value,
   title,
   description,
   trigger,
   accordionText,
   children
}: SettingsTabProps) {


   return (
      <TabsContent value={value}>
         <Card className="py-10 md:pb-16 bg-[#5710a3]/80 border border-black/10 text-whiteText">
            <div className="mx-auto max-w-[400px] space-y-4 ">
               <CardHeader>
                  <CardTitle className="text-3xl">{title}</CardTitle>
                  <CardDescription className="text-whiteText/80 ">
                     <span className="max-w-[350px]">
                        {description}
                     </span> <br />
                     {trigger && <Accordion
                        type="single"
                        collapsible
                        className="text-[#FFC727] text-[12px] ">
                        <AccordionItem value="item-1">
                           <AccordionTrigger>{trigger}</AccordionTrigger>
                           <AccordionContent className="">
                              {accordionText}
                           </AccordionContent>
                        </AccordionItem>
                     </Accordion>}

                  </CardDescription>
               </CardHeader>
               <CardContent>
                  {children}
               </CardContent>
            </div>
         </Card>
      </TabsContent>
   )
}

export default SettingsTab