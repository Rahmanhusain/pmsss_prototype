import ApplicationForm from "@/Components/Application/ApplicationForm"
import DocumentUpload from "@/Components/Application/DocumentUpload"
import PersonalDetails from "@/Components/Application/PersonalDetails"
import StepRibbon from "@/Components/Application/StepRibbon"
import Header from "@/Components/header"

function page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <StepRibbon />
      <PersonalDetails />
      <ApplicationForm />
      <DocumentUpload />
    </div>
  )
}

export default page
