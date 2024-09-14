import DocumentUpload from "@/Components/Application/DocumentUpload"
import PersonalDetails from "@/Components/Application/PersonalDetails"
import StepRibbon from "@/Components/Application/StepRibbon"
import Header from "@/Components/Header"

function page() {
  return (
    <div>
      <Header />
      <StepRibbon />
      <PersonalDetails />
      <DocumentUpload />
    </div>
  )
}

export default page
