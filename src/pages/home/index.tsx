import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./style.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import section1Img from "../../assets/home/career-screen.png";
import section2Img from "../../assets/home/pathways.png";
import section3Img from "../../assets/home/course-screen.png";
import section4Img from "../../assets/home/college-screen.png";
import section5Img from "../../assets/home/inertia-screen.png";
import section6Img from "../../assets/home/test-screen.png";
import upArrow from "../../assets/career-detail/upArrow.png";
import ButtonComponent from "@/libs/material-ui/components/button";

const inter = Inter({ subsets: ["latin"] });

export default function HomeComponent() {
  const content = [
    {
      short: "Presenting, the best of careers to you",
      heading:
        "Do you want a sneak peak of what your professional future will look like?",
      description:
        "It can be difficult to know your future, but it is not impossible! Get acquainted with with",
      points: [
        "Key areas you will be incharge of",
        "How your day at work will look like",
        "Which talents of yours you will be using",
        "What your career will offer you (along with a good income, of course), and",
        "Most importantly- your growth chart",
      ],
      button: "Your Career Hub",
      isButton: true,
      image: section1Img,
    },
    {
      short: "Your map to a succesful career",
      heading: "You can see the goal, now let's race to it",
      description:
        "Now that you realise that your career is waiting for you at the end of the finish line, one should gear up for the race. And while nothing comes easy, doesn't mean that it can be enjoyable. That's why, the career pathways will assist you by:",
      points: [
        "Putting forward the various subject and course combinations available",
        "Briefing you on any entrance exams, or qualifications required",
        "Comparing the overview of various tracks that can be followed",
        "Setting a timeline to the required preparation",
        "Aligning the pros and cons of each possible course of action",
      ],
      button: "",
      isButton: false,
      image: section2Img,
    },
    {
      short: "Navigating to your destination",
      heading: "Prepare to prosper",
      description:
        "Considering that we spend most of our childhood, teenage, and even young adulthood years preparing for a career that will support you for the rest of your life, let's explore the best academic pursuits, and vocational training options knocking at your door",
      points: [
        "Explore all levels of education",
        "Get to know the exams, eligibility, and qualifying parameters",
        "Understand the course materials and syllabus",
        "Learn about fees, duration, mode, and features of study",
        "Identify the prospects the course will open up for you",
      ],
      button: "Find Courses",
      isButton: true,
      image: section3Img,
    },
    {
      short: "Major landmarks of your career story",
      heading:
        "Only the best, for the best your educational environment matters",
      description:
        "Guess what, even the top academic institutes are competeing within themselves to get you.  You also get to know about the college's",
      points: [
        "Admission Requirements",
        "Location",
        "Performance",
        "Educational Fees",
        "Affiliation Status",
        "Exposure Provided",
        "Prospects Offered",
      ],
      button: "Find Colleges",
      isButton: true,
      image: section4Img,
    },
    {
      short: "Your excellence can be limitless",
      heading: "For a career as bright as your ambition",
      description:
        "Learning is eternal, and ever useful. So why stop at good, when you deserve the best? In fact, we have summarised the key trends in the global economy and current job markets to amplify the opportunities available to you, by collating the facts, figures, and fundamentals of major",
      points: [
        "Industries",
        "Internships",
        "Improvements",
        "Inertia",
        "Innovations",
      ],
      button: "",
      isButton: false,
      image: section5Img,
    },
    {
      short: "You can succeed, let's show you how",
      heading: "Let's start with the most important factor- You",
      description:
        "In this fast-paced world, what remains a constant is YOU. So let's find out what your strengths, interests, and traits are- our standardised tests will help the best suited career come to you. And here is how",
      points: [
        "Take the precise, effective online test",
        "Match it with top careers",
        "Understand how to enhance your abilities",
        "Explore the best of your options",
      ],
      button: "Take a free test now",
      isButton: true,
      image: section6Img,
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          background: "#013388",
          width: "100%",
          color: "white",
          height: 500,
          padding: "30px 0",
        }}
      >
        {/* <Container maxWidth="lg"> */}
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6}>
            <div className={styles.mainSec}>
              <div className={styles.title}>
                {" "}
                Take the world’s most advanced
              </div>
              <div className={styles.subTitle}>Interest Aptitude Test</div>
              <div className={styles.text}>
                Using advanced machine learning, psychometrics, and career
                satisfaction data, we’ve reimagined what a career test can be
              </div>
              <div className={styles.statsSection}>
                <div className={styles.statsItem}>
                  <div className={styles.title}>Growth</div>
                  <div className={styles.data}>
                    <Image src={upArrow} alt="" width={20} height={25} />
                    <div className={styles.stats}>17%</div>
                  </div>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.title}>Salary</div>
                  <div className={styles.data}>
                    <Image src={upArrow} alt="" width={20} height={25} />
                    <div className={styles.stats}>₹ 2-8 Lac</div>
                  </div>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.title}>Salary</div>
                  <div className={styles.data}>
                    <Image src={upArrow} alt="" width={20} height={25} />
                    <div className={styles.stats}>₹ 2-8 Lac</div>
                  </div>
                </div>
              </div>
              <Button className={styles.btnYellow}>Take a free test now</Button>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        {/* </Container> */}
      </div>
      <Container maxWidth="xl">
        {content.map((obj) => (
          <Grid container spacing={2} paddingTop={10}>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
                className={styles.contentBox}
              >
                <div className={styles.short}>{obj.short}</div>
                <Typography
                  component="h2"
                  variant="h4"
                  className={styles.heading}
                >
                  {obj.heading}
                </Typography>
                <Typography paragraph className={styles.description}>
                  {obj.description}
                </Typography>
                <List
                  sx={{ listStyleType: "disc", pl: 4 }}
                  className={styles.list}
                >
                  {obj.points.map((nestedObj) => (
                    <ListItem
                      sx={{ display: "list-item" }}
                      className={styles.listItem}
                    >
                      <div className={styles.listIndicator}></div>
                      {nestedObj}
                    </ListItem>
                  ))}
                </List>
                {obj.isButton ? (
                  <>
                    {" "}
                    <ButtonComponent
                      sx={{ display: { xs: "none", sm: "block" } }}
                      variant={"contained"}
                      color={"secondary"}
                      text={obj.button}
                      onClick={() => {
                        alert("clicked");
                      }}
                      style={{
                        background: "#fee040",
                        color: "#112152",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    />
                  </>
                ) : null}
              </Box>
            </Grid>
            <Grid item md={6} lg={6} xs={12} style={{}}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <div style={{}}>
                  {" "}
                  <Image
                    src={obj.image}
                    style={{ width: "100%" }}
                    alt={"home background"}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
      <div style={{ backgroundColor: "#f3f7fe" }}>
        {/* <Container maxWidth="xl"> */}
        <Grid container spacing={2} paddingTop={10}>
          <Grid item md={12}>
            <h1 style={{ color: "#112152", textAlign: "center" }}>
              What our customers says
            </h1>
            <p color="#2b2b2b">
              The Aptitude test measures the following facets that can be used
              for shaping personal, social and professional growth.
            </p>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>
      <Modal
        open
        // onClose={handleClose}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Careers</div>
            <div className={styles.subSections}>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Careers</div>
            <div className={styles.subSections}>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Careers</div>
            <div className={styles.subSections}>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <div className={styles.subSectionTitle}>Top Categories</div>
              <ul>
                <li>Academics & Research</li>
                <li>Aviation</li>
              </ul>
            </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
