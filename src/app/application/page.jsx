import ApplicationForm from "@/components/Application/ApplicationForm";
import DocumentUpload from "@/components/Application/DocumentUpload";
import PersonalDetails from "@/components/Application/PersonalDetails";
import StepRibbon from "@/components/Application/StepRibbon";
import Header from "@/components/header";

function page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <StepRibbon />
      <PersonalDetails />
      <ApplicationForm />
      <DocumentUpload />
    </div>
  );
}

export default page;
