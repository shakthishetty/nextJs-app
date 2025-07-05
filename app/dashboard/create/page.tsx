import { handleSubmission } from "@/app/action"
import SubmitButton from "@/components/SubmitButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const page = () => {

   
  return (
      <div className="mt-5 px-5">
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Create a post to share with the whole world</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={handleSubmission} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input name="title" required type="text" placeholder="Enter Title"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Content</Label>
                        <Textarea name="content" required placeholder="enter the content"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Image Url</Label>
                        <Input name="url" required placeholder="enter the image url" type="url"/>
                    </div>

                    <SubmitButton/>

                </form>
            </CardContent>
        </Card>
      </div>
  )
}

export default page