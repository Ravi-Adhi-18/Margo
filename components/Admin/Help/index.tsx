import { HelpContent } from "@/components/HelpCommon/HelpContent";
import { HelpForm } from "@/components/HelpCommon/HelpForm";

export const Help = () => {
   
    return (
        <>
            <div>
                <h5>We are here to help. Please ﬁll out the form below <br /> and our customer care team will reach out. </h5>
                <div className="d-flex mt-4 flex-wrap justify-content-between align-items-center">
                    <div className="col-12 col-md-7">
                        <HelpForm className={"col-12 col-md-7"}/>
                    </div>
                   
                    <div className="col-12 col-md-5 pt-3">
                        <HelpContent />
                    </div>
                   
                </div>
               
            </div>

        </>
    )
}