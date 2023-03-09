import Image from "next/image";
import styles from "./style.module.css";
import { Grid } from "@mui/material";
import sectionImg from "../../assets/career-detail/career-detail.png";
import upArrow from "../../assets/career-detail/upArrow.png";
import collegeLogo from "../../assets/career-detail/college-logo.png";
import Button from "@mui/material/Button";
export default function BlogDetail() {
  return (
    <Grid className={styles.container}>
      <div className={styles.topSection}></div>
      <Grid xl={9} lg={9} className={styles.leftSection}>
      <div className={styles.titleBlock}>
        <div className={styles.title}>
          Think Beyond MBBS: 14 In-Demand Career Options for PCB Students after
          Class 12th
        </div>
        <div className={styles.subTitle}>
          <div className={styles.subTitleItem}>Finance & Accounts</div>
          <div className={styles.subTitleItem}>Commerce</div>
          <div className={styles.subTitleItem}>Management</div>
        </div>
        <div >19 October 2018</div>
        </div>
        <div className={styles.dataSection}>
          <div className={styles.mainImg}>
            <Image src={sectionImg} alt="" width={170} height={25} />
          </div>
          <div className={styles.textSection}>
            <p className={styles.text}>
              MSME manufacturing firms have been imperative to the growth of the
              Indian economy. These small to medium-sized ventures have always
              contributed largely to the country’s GDP, and to different aspects
              of its development.
            </p>
            <p className={styles.text}>
              The Indian MSME sector contributes about 29 percent towards the
              GDP through national and international trade. As per MSME Ministry
              data, as of May 16, 2021, India has approximately 6.3 crore MSMEs
              (including both service and manufacturing firms). It must be noted
              that this sector still has a lot of unexplored territories for
              growth. It won’t be wrong to say that with so much growth
              potential, emphasising the development of MSME manufacturing firms
              can work as a long-term development tool for India.
            </p>
          </div>
          <div className={styles.textSection}>
            <div className={styles.title}>Low capital requirements</div>
            <p className={styles.text}>
              One of the plus points of the MSME manufacturing units is their
              low capital-intensive setups. These organisational units work with
              manpower and raw material which are easily available in particular
              geographical regions. Such setups can also absorb semi-skilled and
              unskilled graduates into their workforce. Thus, solving the issues
              like unemployment, seasonal unemployment, and disguised
              unemployment for the youth of the country. In short, MSME units
              operate on fewer business overheads.
            </p>
            <p className={styles.text}>
              Another edge that the MSME manufacturing businesses have over the
              other businesses is its fast output. With the ready availability
              of labour and a small managerial hierarchy, decisions can be taken
              and implemented faster than the organisational units with large
              structures. With optimal output in less time, it further reduces
              the cost of production.
            </p>
          </div>
          <div className={styles.textSection}>
            <div className={styles.title}>
              Increased per capita income needed to become an accountant?
            </div>
            <p className={styles.text}>
              The MSME manufacturing sectors, which provide a livelihood to so
              many families, are a driving factor for the per capita income of
              the country. With more MSMEs, the per capita income of more and
              more households increases, which leads to the general betterment
              of the lifestyle and overall development in the economy.
            </p>
            <p className={styles.text}>
              In these uncertain times, when the world has been hit by COVID 19,
              India, like other countries, would like to depend less and less on
              exports. In such changing scenarios, MSME manufacturing firms can
              prove to be the pillars of the changing economy.
            </p>
          </div>
        </div>
        <div className={styles.iconsBlock}></div>
        <div className={styles.textSection}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.top}>
                There is a debate occurring in the experience design community
                regarding its focus, provoked in part by design scholar and
                practitioner, Don Norman. Norman claims that when designers
                describe people only as
                <div className={styles.btnsBlock}>
                  <Button>Close</Button>
                  <Button className={styles.btnYellow}>Post</Button>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.top}>
                <div className={"dFlex alignItemsCenter"}>
                  <Grid xl={2} lg={2}>
                    <Image src={collegeLogo} width={48} height={48} />
                  </Grid>
                  <Grid xl={10} lg={10}>
                    <div className={styles.title}>Heather McLaughlin</div>
                    <div className={styles.subTitleItem}>Jan 23, 2020</div>
                  </Grid>
                </div>
                There is a debate occurring in the experience design community
                regarding its focus, provoked in part by design scholar and
                practitioner, Don Norman. Norman claims that when designers
                describe people only as
              </div>
            </div>
            <div className={styles.link}>Load more</div>
          </div>
        </div>
      </Grid>
      <Grid xl={3} lg={3} className={styles.rightSection} display={{ xs: "none", lg: "block" }}>
        <div className={styles.imageBlockWrap}>
        <div className={styles.imageBlock}>  
        </div>
        <div className={styles.imageText}>
        <div className={styles.btnsBlock}>
            <Button className={styles.btnYellow}>Science</Button>
            <Button className={styles.btnYellow}>Sales & Marketing</Button>
          </div>
          <div className={styles.title}>
            MBSS vs BDS vs BAMS vs BHMS: Which Medical Course is Right for You?
          </div>
          <div className={styles.lightText}>08 December 2021</div>
        </div>
        </div>
        <div className={styles.imageBlockWrap}>
        <div className={styles.imageBlock}>  
        </div>
        <div className={styles.imageText}>
        <div className={styles.btnsBlock}>
            <Button className={styles.btnYellow}>Science</Button>
            <Button className={styles.btnYellow}>Sales & Marketing</Button>
          </div>
          <div className={styles.title}>
            MBSS vs BDS vs BAMS vs BHMS: Which Medical Course is Right for You?
          </div>
          <div className={styles.lightText}>08 December 2021</div>
        </div>
        </div>
        <div className={styles.imageBlockWrap}>
        <div className={styles.imageBlock}>  
        </div>
        <div className={styles.imageText}>
        <div className={styles.btnsBlock}>
            <Button className={styles.btnYellow}>Science</Button>
            <Button className={styles.btnYellow}>Sales & Marketing</Button>
          </div>
          <div className={styles.title}>
            MBSS vs BDS vs BAMS vs BHMS: Which Medical Course is Right for You?
          </div>
          <div className={styles.lightText}>08 December 2021</div>
        </div>
        </div>
        <div className={styles.menuList}>
        <ul>
          <li>All (200)</li>
          <li className={styles.active}>Aptitude Test(5)</li>
          <li>Art And Media(1)</li>
          <li>Career Counselling(31)</li>
          <li>Online IQ Test</li>
          <li>Online IQ Test</li>
        </ul>
      </div>
      </Grid>
    </Grid>
  );
}
