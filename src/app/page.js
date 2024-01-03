/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EWISgSRIrcb
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

export default function Component() {
  return (
    <>
      <div className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gradient-to-r from-blue-500 to-green-500 fixed top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <StoreIcon className="h-6 w-6 text-white mr-2" />
          <span className="sr-only">Reptile Manager</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#Home"
          >
            Introduction
          </Link>
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#About us"
          >
            About us
          </Link>
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#Ideas"
          >
            Ideas
          </Link>
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#Feasibility"
          >
            Feasibility
          </Link>
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#Growth Strategy"
          >
            Growth Strategy
          </Link>
          <Link
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline underline-offset-4 text-white"
            href="#Contact"
          >
            Contact
          </Link>
        </nav>
      </div>
      
                
      <main className="flex-1">
        <section
          className="w-full py-12 sm:py-24 md:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-green-500 text-white"
          id="Home"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Reptile Manager"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="https://rudwn1.github.io/rep/chameleon2.jpeg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Reptile Manager
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Wi-Fi-based IoT reptile management system that automatically controls temperature/humidity based on
                    breeding object activity and environmental data and predicts the condition of the object for best
                    management
                  </p>
                </div>
                <Button className="bg-white text-black" onClick="location.href='#Feasibility'">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
            <img
                alt="Reptile Manager"
                className="w-20 h-20 mb-5"
                height="100"
                src="https://rudwn1.github.io/rep/thinking.png"
                width="100"
              />
              <h2 className="text-2xl font-bold">Problem recognition</h2>
              <p className="mt-2 text-gray-500">
                An increasing number of reptiles are kept as pets, and they often suffer from diseases due to inadequate
                management.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
            <img
                alt="Reptile Manager"
                className="w-20 h-20 mb-5"
                height="100"
                src="https://rudwn1.github.io/rep/flame.png"
                width="100"
              />
              <h2 className="text-2xl font-bold">Motivation for development</h2>
              <p className="mt-2 text-gray-500">
                We aim to improve the quality of life for these reptiles by providing a system that automates their
                management.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
            <img
                alt="Reptile Manager"
                className="w-20 h-20 mb-5"
                height="100"
                src="https://rudwn1.github.io/rep/lightbulb.png"
                width="100"
              />
              <h2 className="text-2xl font-bold">Necessity for development</h2>
              <p className="mt-2 text-gray-500">
                With our system, we hope to reduce the number of reptiles that suffer from diseases due to lack of
                management.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8" id="About us">
          <h2 className="text-4xl font-bold text-center mb-4 p-8">Who are we?</h2>
          <div className="p-4 bg-white rounded-lg shadow text-center mb-8">
            <p className="text-gray-500">
              We are students from Hanyang University ERICA who are passionate about creating innovative solutions.
            </p>
            <p className="text-gray-500">Our goal is to apply for the start-up club and bring our ideas to life.</p>
          </div>
          <h2 className="text-2xl font-bold text-center mb-7">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 flex-grow mt-8">
          <div className="p-3 bg-white rounded-lg shadow text-center">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                <img src="https://rudwn1.github.io/rep/sea-lion.png" alt="User Avatar"/>
              </span>
              <h3 className="font-bold text-xl mb-3">Gyeongju Kim</h3>
              <p className="text-gray-500">Hanyang University ERICA Student</p>
              <p className="text-gray-500">Department of ICT Convergence</p>
              <p className="text-gray-500">(Major in Media Technology)</p>
              <p class="text-blue-500 font-bold">Email: <a href="mailto:kjkim0905@hanyang.ac.kr" class="text-blue-500">kjkim0905@hanyang.ac.kr</a></p>
            </div><div className="p-3 bg-white rounded-lg shadow text-center">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                <img src="https://rudwn1.github.io/rep/cat.png" alt="User Avatar"/>
              </span>
              <h3 className="font-bold text-xl mb-3">Bogyeong Kim</h3>
              <p className="text-gray-500">Hanyang University ERICA Student</p>
              <p className="text-gray-500">Department of Materials and Chemical Engineering</p>
              <p class="text-blue-500 font-bold">Email: <a href="mailto:kj730267@hanyang.ac.kr" class="text-blue-500">kj730267@hanyang.ac.kr</a></p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-29 bg-gray-100 dark:bg-gray-100" id="Ideas">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ideas</h2>
            <div className="grid gap-4 py-10 lg:grid-cols-1 lg:gap-8">
              <h3 className="text-2xl font-bold mb-2">Motivation and necessity for development</h3>
              <Card>
                <CardContent className="py-4">
                  <p>
                    With the increasing position of pets, the position of small animals that are relatively less
                    burdensome to busy modern people is increasing. In particular, reptiles are a species that grows in
                    position as pets due to their simple management and variety of types and morphs. As a result, I
                    encountered many animals through media such as Reptile Naver Cafe and YouTube channels that did not
                    receive basic management and could not guarantee even basic life. Most of them were cases in which
                    diseases caused by lack of management, such as dehydration, hair loss failure, bacterial diseases
                    and pus, were directly related to life. We decided that the breeder was responsible for the passive
                    breeding method, which checks the thermometer and humidity meter directly and controls the humidity
                    with heating and powder weapons, and devised a management system that considers the breeder and the
                    individual based on Wi-Fi boards such as Arduino WeMos. We intend to develop a device that measures
                    temperature, humidity, and activity and automatically operates the heat source and water supply
                    system according to the set temperature and humidity, and an application that promotes the best
                    management such as predicting the state of the individual and proposing appropriate measures based
                    on the data received from the device.
                  </p>
                  <img
  alt="Reptile disease distribution_Figure 2. Cristina RT, Kocsis R, Dégi J, Muselin F, Dumitrescu E, Tirziu E, Herman V, Darău AP, Oprescu I. Pathology and Prevalence of Antibiotic-Resistant Bacteria: A Study of 398 Pet Reptiles. Animals (Basel). 2022 May 17;12(10):1279. doi: 10.3390/ani12101279. PMID: 35625125; PMCID: PMC9137941"
  className="aspect-square object-contain border border-gray-300 w-full rounded-lg overflow-hidden dark:border-gray-300"
  src="https://rudwn1.github.io/rep/chart.jpeg"
/>

                  <figcaption className="text-center mt-2">Figure 2. Cristina RT, Kocsis R, Dégi J, Muselin F, Dumitrescu E, Tirziu E, Herman V, Darău AP, Oprescu I. Pathology and Prevalence of Antibiotic-Resistant Bacteria: A Study of 398 Pet Reptiles. Animals (Basel). 2022 May 17;12(10):1279. doi: 10.3390/ani12101279. PMID: 35625125; PMCID: PMC9137941.</figcaption>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2">Product differentiation</h3>
              <Card>
                <CardContent>
                  <p>
                    Currently in reptile breeding, most breeders only use automatic thermostats as automated devices.
                    This breeding method requires the breeder to directly adjust the shape of the kennel (closed/open
                    type) in order to maintain proper humidity, and requires constant monitoring. In addition, there are
                    few cases of automatic humidity controllers and they form a very high price range of about 70,000
                    won. Designed based on Arduino, the product has a temperature and humidity control function at the
                    price of around 20,000 won, and the user can check the recent data graph and real-time data on the
                    amount of temperature and humidity transmitted based on Wi-Fi through a smartphone app. When
                    abnormalities are found through the graph of activity measured by infrared sensors, a notification
                    is sent to the user to request an individual status check in the form of a questionnaire, and some
                    measures are suggested based on the input value. It is a system that can dramatically reduce the
                    burden of management on breeders by installing a breeding log function that can record specificities
                    and measurement data and provide information related to breeding, while at the same time providing
                    the best management. This system is planned to be developed in the form of a web application using
                    Arduino wifi board (ex.WeMos) and IFTTT.
                  </p>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2">Possibilities for future development</h3>
              <Card>
                <CardContent>
                  <p className="flex">
                    <span>
                      As the system matures, we plan to create a fully automated kennel in the form of a vivarium by
                      automating the feeding and cleaning of kennel for specific species (ex. micro-lizards). A vivarium
                      kennel is a pet kennel that creates a natural environment using plants and natural materials.
                      Vivarium provides natural value to animals that have lived their lives running on the soil and
                      hiding themselves in trees, and the breeder is in the form of a kennel where the breeder can
                      observe small nature. In addition, Vivarium, which mimics nature, is held slowly, and
                      decomposition water that acts as a cleaner in the kennel and food for the kennel can be maintained
                      at a certain saturation level compared to the size of the kennel. By automating temperature,
                      feeding, and kennel cleaning, breeders can raise and care for their pets without much care. In the
                      field of raising fish as pets, non-returnable water tank is a topic that is always attracting
                      attention as an automated breeding ground that can be raised and treated with minimal care. Even
                      in the reptile industry, an automated breeding ground that can create an appropriate environment
                      without management will be highly commercially available. In addition, since the labor input is
                      greatly reduced, it is considered suitable to meet the needs of not only general breeders, but
                      also customers who raise reptiles on a large scale or breed and sell reptiles, and reptile shops.
                      By continuously improving and expanding our product, we aim to become a leading provider of smart
                      pet management solutions.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="Feasibility">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feasibility</h2>
            <div className="grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <h3>Device Development Plan</h3>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect the temperature and humidity sensor module (DHT11 module) and the infrared PIR motion sensor
                    to Arduino WeMos D1 with a long cable. Considering that the heat source (spot lamp) is divided and
                    commercialized by use in the market while the water supply system is not popularized, the heat
                    source is designed to be receptive and the water supply is designed in an integrated manner. By
                    connecting the power cord (wire cord) to the relay module at the middle and the outlet at the end,
                    the heat source product can be controlled without any voltage problems. The water supply system is
                    designed to submerge in the water tank (a water bottle or a self-made water bottle plan) by
                    connecting a hose to the Arduino water pump motor. Also, connect the LCD display module and the
                    button for setup and verification, and finally install it in the case.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3>Software Development Plan</h3>
                </CardHeader>
                <CardContent>
                  <p>Control is based on +-2°C of the set temperature and +-10% of the set humidity to maintain the proper temperature and humidity. For example, if the set temperature and humidity are 70% at 27°C, the power is supplied to the heat source outlet below 25°C, the power is shut off if it is above 29°C, and the water pump motor operates below 60% humidity and does not operate when it reaches 80%. In the case of the water pump, considering the slow evaporation rate for increasing humidity, it is designed in a way that does not operate for 10 minutes per operation. Detailed numbers are programmed to allow the user to control them through the application based on Wi-Fi.
                    Application
                    Using the ESP8266 Wi-Fi module on the Arduino WeMos D1, R1 Wi-Fi board or Arduino Uno, you can post data entered through sensors in the form of web pages based on Wi-Fi. We plan to read the web pages with the Webhook program and develop web applications and Android/iOS apps in turn using IFTTT.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3>Application Development Plan</h3>
                </CardHeader>
                <CardContent>
                  <p>
                    Using the ESP8266 Wi-Fi module on the Arduino WeMos D1, R1 Wi-Fi board or Arduino Uno, you can post
                    data entered through sensors in the form of web pages based on Wi-Fi. We plan to read the web pages
                    with the Webhook program and develop web applications and Android/iOS apps in turn using IFTTT.
                  </p>
                  <img
                    alt="Conceptual Drawing"
                    className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mt-4"
                    height="200"
                    src="https://rudwn1.github.io/rep/concept.jpeg"
                    width="200"
                  />
                  <figcaption className="text-center mt-2">Conceptual Drawing</figcaption>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <h3>Component Pricing</h3>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Arduino WeMos D1</TableCell>
                        <TableCell>₩5000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Temperature and Humidity Sensor Module (DHT11 module)</TableCell>
                        <TableCell>₩2000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Infrared PIR Motion Sensor</TableCell>
                        <TableCell>₩1000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Power Cord (Wire Cord)</TableCell>
                        <TableCell>₩1200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Relay Module</TableCell>
                        <TableCell>₩1500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>1-Outlet Outlet</TableCell>
                        <TableCell>₩1000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Water Pump Motor</TableCell>
                        <TableCell>₩1100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>LCD Display Module</TableCell>
                        <TableCell>₩1000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Button/Hose/Cable</TableCell>
                        <TableCell>₩1000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>₩13900</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3>Project Schedule</h3>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Find customers and establish H/W system design</TableCell>
                        <TableCell>01/15/2024</TableCell>
                        <TableCell>01/31/2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Excluding web apps HW/SW prototype 1st production</TableCell>
                        <TableCell>02/01/2024</TableCell>
                        <TableCell>02/15/2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Development of early version of web app</TableCell>
                        <TableCell>02/16/2024</TableCell>
                        <TableCell>03/01/2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          After joining the start-up club: Producing a prototype case (3D printer), modifying and
                          designing web apps UI/UX
                        </TableCell>
                        <TableCell>03/02/2024</TableCell>
                        <TableCell>TBD</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Subsequent plans will be established, including outsourcing of sales cases, and developing
                          Andriod/iOS apps
                        </TableCell>
                        <TableCell>TBD</TableCell>
                        <TableCell>TBD</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100" id="Growth Strategy">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Growth Strategy</h2>
            <div className="grid gap-6 py-12 lg:grid-cols-1 lg:gap-12">
              <h3 className="text-2xl font-bold mb-2">Reptile Market Outlook</h3>
              <Card className="lg:col-span-1">
                <CardContent>
                  <p>Global Small Mammal and Repetile Food Market 2021-2025, a market report by Global Information Co., Ltd., analyzed that the size of the special animal market will expand by $986.4 million during the forecast period, showing a compound growth rate of 9% per year on average. According to an article on the daily economy (reporter Kim Jeong-seok, 20220505), the popularity of reptiles has grown rapidly over the past two years due to COVID-19. During COVID-19, reptile-related YouTubers became popular, attracting a large number of young people to the reptile market. Dahaek, a YouTuber who typically deals with rare animals such as reptiles and amphibians as video materials, had 400,000 subscribers in 2019, before COVID-19, but now it is about 900,000, confirming the rise of the reptile market. In addition, according to Professor Moon Dae-seung of the Department of Petrology at Yeonhui Practical School in Seoul, the number of rare genetic traits, such as Crested Gecko_Super Cappuccino (melanistic) Morph, is priced between millions and tens of millions of won, and as a result, Pet Tech, which raises pets that are easy to raise and expensive to invest in, has grown rapidly.</p>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2">Current Korean Status of Reptile Breeding</h3>
              <Card className="lg:col-span-1">
                <CardContent>
                  <p>Currently in reptile breeding, most breeders only use automatic thermostats as automated devices. This method of breeding requires the breeder to directly adjust the shape of the kennel (closed/open type) in order to maintain proper humidity, and requires constant monitoring. In addition, the automatic humidity controller has few product cases and forms a very high price range of about 70,000 won. The breeder checks the temperature and humidity meter himself and controls it with a sprayer, so constant management is required. However, due to the lack of time, knowledge, lack of responsibility, and academic reasons, the breeder does not even receive basic management, so it is said that it is common to suffer or die from diseases caused by poor management such as dehydration, hair loss, bacterial diseases and pus.</p>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2">Performance Generation Strategy</h3>
              <Card className="lg:col-span-1">
                <CardContent>
                  <p>There are many large YouTube channels that contribute greatly to increasing the position of the reptile market, such as Jungbr, Daheuk, and Juno Junho. In the video, you can easily see the contents that point out the lack of management of some reptile breeders and emphasize responsible breeding. Since the purpose of the development of this product and the beliefs of YouTubers are similar, we will sponsor the product on the condition of publicity and flexibly negotiate the advertising costs to promote it to viewers, that is, those who are interested in raising reptiles or raising reptiles. In addition, Naver cafe - Pasamo, with 210,000 members, has an average of more than 3,000 visitors per day, and reptile breeders are actively engaged in activities such as opening and selling their breeding know-how. If you write a review on a reptile-related community such as Pasamo to product buyers, you will achieve a promotional effect by providing free gifts or paybacks.</p>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2">Funding Requirements and Procurement Plan</h3>
              <Card className="lg:col-span-1">
                <CardContent>
                  <p>
                    It is expected to cost about 15,000 won for each material excluding the case, and the case is self-made, and in the case of prototypes, it is a 3D printer installed on the campus, and the sales products will be supplied through outsourcing companies. In addition, it is expected that additional funds such as start-up space and patent attorney consultation fees will be required. Hanyang University ERICA Startup Education Center selects start-up clubs for students enrolled in this school, and provides benefits such as LINC+ business policy support, start-up space, and mentoring within a total limit of 3 million won. In mid-February, before the recruitment schedule for the start-up club of this school, we plan to develop a prototype of this product, software implementation, and an initial version of the web application, excluding the case, and based on this, we plan to support the start-up club in the first semester of the year 24 to cover the required funds.
                  </p>
                  <Button className="text-lg text-blue-500" variant="link">
                    <a href="https://eec.hanyang.ac.kr/front/ko/support/club/introduce" target="_blank">Learn More about HYU ERICA start-up club</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="Contact">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
          </div>
      <main className="flex flex-col md:flex-row gap-4 md:gap-12 p-4 md:p-6">
        <Card className="flex-1">
          <CardHeader>
            <h2 className="text-3xl font-bold">Gyeongju Kim</h2>
          </CardHeader>
          <CardContent>
          <p class="text-xl text-blue-500 font-bold">Email: <a href="mailto:kjkim0905@hanyang.ac.kr" class="text-blue-500">kjkim0905@hanyang.ac.kr</a></p>
          </CardContent>
        </Card>
        <aside className="flex-1">
          <Card className="w-full">
            <CardHeader>
              <h2 className="text-3xl font-bold">Bogyeong Kim</h2>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-600">
              <p class="text-2xl text-blue-500 font-bold">Email: <a href="mailto:kj730267@hanyang.ac.kr" class="text-blue-500">kj730267@hanyang.ac.kr</a></p>
              </p>
            </CardContent>
          </Card>
        </aside>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-600 dark:text-gray-400">© 2024 Reptile Manager</p>
      </footer>
    </section>
      </main>
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <p className="text-xs">© Reptile Manager. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}
