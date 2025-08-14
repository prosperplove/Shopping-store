import React,{useEffect} from 'react'

const Policy = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div style={{marginTop:"20vh"}}>
      <div className="container" id="terms">
        <h1> DA STELLA'S TERMS OF USE</h1>
        <p> Last revised:july 2025</p>
         <h2> Welcome to the DA STELLA'S Community</h2>
         <h2>PLEASE READ THESE DA STELLA'S TERMS OF USE (“TERMS”) CAREFULLY BEFORE USING ANY DA STELLA'S SERVICES OR PRODUCTS OR PARTICIPATING IN ANY DA STELLA'S EXPERIENCES.</h2>
         <p>These Terms apply to DA STELLA'S websites, social media platforms, and mobile applications (the “Platform”); the digital experiences, membership programs, and other services accessible through or enabled by the Platform (together with the Platform, the “Services”); footwear, apparel, equipment, accessories, and other products sold or otherwise provided by DA STELLA'S (“Products”); and experiences and events hosted by DA STELLA'S or in DA STELLA'S stores (“Experiences”).
         These Terms create a legally binding agreement between you and DA STELLA'S regarding your use of the Services and Products and your participation in the Experiences. If you live in any of the following countries or regions, additional or alternative provisions of these Terms (set forth below) may apply: Argentina , Australia , Brazil , Canada , Colombia , Hong Kong , Indonesia , Japan , the Philippines , Thailand , Vietnam , and all European countries (including specific terms for Austria , Belgium , France , Germany , Hungary , Italy , the Netherlands , Poland , Spain , Switzerland , and the United Kingdom ). Additionally, in certain countries and regions, DA STELLA'S.com, SNKRS.com, or the DA STELLA'S App may be operated by a third party on behalf of DA STELLA'S, in which case the terms and conditions of such third party will apply to your use of those platforms in such countries or regions.
.</p>
      </div>
      <div className="container" id="terms-two">
        <h1>TERMS APPLICABLE TO YOU</h1>
          <p>Updates

          We may update these Terms from time to time. The "Last Revised" date above indicates when these Terms were last updated. If we make updates, we may also send you a notice. Unless we indicate otherwise, updated Terms will be effective immediately upon posting, and your continued use of the Services, purchase of additional Products, or participation in Experiences will confirm your acceptance of the updates.</p>

        <h1>Additional terms</h1>

         <p>We may indicate that different or additional terms, conditions, guidelines, policies, or rules apply to some of our Services, Products, or Experiences (“ Supplemental Terms ”). Any Supplemental Terms become part of your agreement with us if you use the applicable Services, Products, or Experiences, and if there is a conflict between these Terms and the Supplemental Terms, the Supplemental Terms will govern for that conflict. Please see the section titled Alternative and Additional Terms for more information.</p>

        <h1>Terms of sale</h1>

        <p>By purchasing a Product from us, you also agree to the Terms of Sale that apply in your country or region. The Terms of Sale are Supplemental Terms. For information on how to return Products, please refer to the Return Policy applicable to your country or region.</p>
      </div>
    </div>
  )
}

export default Policy
