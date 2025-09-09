import {cn, layout, typo} from "@/utils/classnames";
import Image from "next/image";

export default function DataDrivenDesign() {
  const imgPrefix = "/design_study_page_";

  return (
    <div className="min-h-screen bg-background text-foreground mt-16">
      <div className={layout.section}>
        {/* project 1 */}
        <h4 className={typo.h4}>Design Study I</h4>
        <h2 className={cn(typo.h2, "mb-4")}>Solar-Responsive Tree House</h2>
        <p className={cn(typo.p1, "mb-6")}>Set within a wooded landscape in Texas, this project reimagines the house
          facade through an environmentally responsive envelope driven by site-specific solar data.
          The radiation data informed the design of a responsive facade system that adapts to the intensity of sunlight
          exposure.</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={`${imgPrefix}01.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
          <Image
            src={`${imgPrefix}03.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
        <p className={cn(typo.p1, "mb-6")}>The facade is categorized into four panel types based on radiation levels.
          Areas with higher solar exposure feature panels with smaller perforations to reduce heat gain while allowing
          natural light, whereas zones with lower radiation are assigned bigger perforations to maintain interior
          brightness. This strategy creates a dynamic daylight system that improves the house’s energy performance
          and interior comfort. Then the perforation logic evolved into abstracted tree patterns, integrating
          environmental data with the surrounding forest landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={`${imgPrefix}04.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
          <Image
            src={`${imgPrefix}05.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
        <Image
          src={`${imgPrefix}06.jpg`}
          alt="image"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
        />
        <div className="flex flex-col md:flex-row items-center mb-6">
          <p className={cn(typo.p1, "mb-6")}>The resulting design is a fusion of solar responsiveness and contextual
            camouflage—using organic forms to
            harmonize the structure with its natural setting. Metal panels wrap as an envelope, offering a seamless skin
            that balances transparency and privacy while reinforcing the tree house’s resilience against weather and
            time. The workflow demonstrates a synthesis of computational design, environmental analysis, and material
            performance to achieve a sustainable, context-sensitive architectural solution.</p>
          <Image
            src={`${imgPrefix}07.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-2/3 h-auto object-contain"
          />
        </div>

        {/* project 2 */}
        <h4 className={typo.h4}>Design Study II </h4>
        <h2 className={cn(typo.h2, "mb-4")}>Urban Light Filter</h2>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <Image
            src={`${imgPrefix}08.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-1/2 h-auto object-contain"
          />
          <p className={cn(typo.p1, "mb-6")}>Located in the heart of a dense urban center and surrounded by buildings of
            varied heights, this project responds to the challenges of limited and uneven sunlight exposure through a
            data-informed facade strategy. By generating a solar radiation map that accounts for shading from adjacent
            structures, the project captures the nuanced patterns of sunlight across the building surface.</p>
        </div>
        <p className={cn(typo.p1, "mb-6")}>These insights are translated into a system of diamond-shaped panels, each
          varying in perforation size based on radiation levels. Areas with lower radiation feature larger perforations
          to allow more natural light to penetrate the interior, while areas with higher radiation use smaller
          perforations to reduce solar gain and glare. This consistent logic enables a fine-tuned daylighting strategy,
          improving interior comfort while subtly expressing the building’s environmental context.</p>
        <p className={cn(typo.p1, "mb-6")}>The diamond geometry introduces both structural clarity and visual dynamism.
          As sunlight shifts throughout the day, the angled panels interact with light to create ever-changing patterns
          of shadow and reflection—evoking a kinetic, jewel-like facade that breathes with its surroundings.</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={`${imgPrefix}09.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
          <Image
            src={`${imgPrefix}10.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <p className={cn(typo.p1, "mb-6")}>This project blends computational analysis, parametric design, and urban
            sensitivity into a cohesive architectural response. It transforms environmental data into a performative
            skin that balances aesthetics, comfort, and sustainability—demonstrating how passive strategies can become
            an expressive part of the city’s architectural language.</p>
          <Image
            src={`${imgPrefix}11.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-2/3 h-auto object-contain"
          />
        </div>

        {/* project 3 */}
        <h4 className={typo.h4}>Design Study III </h4>
        <h2 className={cn(typo.h2, "mb-4")}>Programmatic Skin Tower</h2>
        <p className={cn(typo.p1, "mb-6")}>This high-rise project investigates the potential of parametric facade design
          to mediate between environmental performance, programmatic needs, and urban experience. The building employs a
          curtain wall system based on a triangular panel geometry, where one vertex of each triangle is dynamically
          controlled by parameters that respond to the program behind the facade.</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={`${imgPrefix}12.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
          <Image
            src={`${imgPrefix}13.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
        <p className={cn(typo.p1, "mb-6")}>The panel design creates two distinct surfaces: one side, extruded and clad
          in translucent material, provides solar shading and thermal control; the other side remains transparent,
          prioritizing views and visual connectivity. The angle between these two surfaces is continuously adjusted,
          creating a dynamic gradient across the facade that reflects both interior functions and environmental
          conditions.</p>
        <p className={cn(typo.p1, "mb-6")}>Using programmatic mapping, different zones of the building are assigned view
          and shading priorities. For instance, mechanical or back-of-house areas require minimal visibility, offices
          benefit from moderate light and views, while public spaces like the lobby demand high transparency. These
          requirements are remapped across the facade, and the triangle&apos;s third point dynamically adjusts, modulating
          the extrusion angle of each panel accordingly.</p>
        <p className={cn(typo.p1, "mb-6")}>A curved input is introduced to smooth the angular transitions, resulting in
          a flowing surface that undulates both horizontally and vertically, creating a fluid architectural expression.
          This flow generates a subtle rhythm in the facade, animating the building surface and offering varying visual
          effects throughout the day.</p>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <Image
            src={`${imgPrefix}14.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-1/2 h-auto object-contain"
          />
          <p className={cn(typo.p1, "mb-6")}>The design is further evaluated through solar performance analysis,
            measuring how the angled panels reduce direct solar gain, minimize glare, and contribute to overall energy
            efficiency. Panels with greater tilt act as passive shading devices, reducing cooling loads, while more
            transparent zones enhance occupant comfort where views are most critical. This synergistic relationship
            between geometry, program, and performance allows the building to adapt intelligently to both internal and
            external contexts.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <p className={cn(typo.p1, "mb-6")}>Ultimately, the facade becomes a performative skin—an intelligent mediator
            between the city and the building’s occupants, expressing programmatic logic and environmental
            responsiveness through a unified architectural language.</p>
          <Image
            src={`${imgPrefix}15.jpg`}
            alt="image"
            width={1200}
            height={1200}
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
