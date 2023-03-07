import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.css";
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import sectionImg from "../../assets/career-detail/career-detail.png";
import upArrow from "../../assets/career-detail/upArrow.png";
import collegeLogo from "../../assets/career-detail/college-logo.png";
export default function CareerDetail() {
  return (
    <Grid className={styles.container}>
      <div className={styles.topSection}></div>
      <Grid xl={2} lg={2} className={styles.menuList}>
        <ul>
          <li>Overview</li>
          <li className={styles.active}>Typical day at work</li>
          <li>Abilities & aptitude needed</li>
          <li>Entrance</li>
          <li>Courses</li>
          <li>Best colleges</li>
          <li>Internship</li>
          <li>Career Outlook</li>
          <li>Industries</li>
        </ul>
      </Grid>
      <Grid xl={10} lg={10} className={styles.rightSection}>
        <div className={styles.title}>Accountant </div>
        <div className={styles.subTitle}>
          <div className={styles.subTitleItem}>Finance & Accounts</div>
          <div className={styles.subTitleItem}>Commerce</div>
          <div className={styles.subTitleItem}>Management</div>
        </div>
        <div className={styles.dataSection}>
          <div className={styles.mainImg}>
            <Image src={sectionImg} alt="" width={170} height={25} />
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
          </div>
          <div className={styles.textSection}>
            <div className={styles.subTitle}>Growth</div>
            <div className={styles.title}>
              Who is an <span className={styles.fontBold}>Accountant?</span>
            </div>
            <p className={styles.text}>
              An accountant is a practitioner of accounting or accountancy.
              Accountants who have demonstrated competency through their
              professional associations' certification exams are certified to
              use titles such as Chartered Accountant, Chartered Certified
              Accountant or Certified Public Accountant, or Registered Public
              Accountant. Such professionals are granted certain
              responsibilities by statute, such as the ability to certify an
              organization's financial statements, and may be held liable for
              professional misconduct. Non-qualified accountants may be employed
              by a qualified accountant, or may work independently without
              statutory privileges and obligations.
            </p>
          </div>
          <div className={styles.textSection}>
            <div className={styles.title}>
              <div className={styles.textSection}>
                <div className={styles.subTitle}>Typical day at work</div>
                <div className={styles.title}>
                  What does{" "}
                  <span className={styles.fontBold}>an Accountant do? </span>
                </div>
                <ul className={styles.text}>
                  <li>
                    <span className={styles.listIndicator}></span>
                    Is Dermatoglyphics testing scientific or Medical basic?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>How effective
                    is an online aptitude test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    What are the benefits of the Brainwonders Aptitude Test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    What are the advantages of the Brainwonders Online Aptitude
                    Test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    How accurate is the dermatoglyphics multiple intelligences
                    test?
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.textSection}>
            <div className={styles.subTitle}>Abilities & apptitude needed</div>
            <div className={styles.title}>
              What are the{" "}
              <span className={styles.fontBold}>
                skills, abilities & aptitude{" "}
              </span>
              needed to become an accountant?
            </div>
            <p className={styles.text}>
              An accountant is a practitioner of accounting or accountancy.
              Accountants who have demonstrated competency through their
              professional associations' certification exams are certified to
              use titles such as Chartered Accountant, Chartered Certified
              Accountant or Certified Public Accountant, or Registered Public
              Accountant. Such professionals are granted certain
              responsibilities by statute, such as the ability to certify an
              organization's financial statements, and may be held liable for
              professional misconduct. Non-qualified accountants may be employed
              by a qualified accountant, or may work independently without
              statutory privileges and obligations.
            </p>
          </div>
          <div className={styles.textSection}>
            <div className={styles.subTitle}>Pathways</div>
            <div className={styles.title}>
              How to{" "}
              <span className={styles.fontBold}>become an Accountant?</span>
            </div>
            <div className={styles.pathways}>
              <div className={styles.pathway}>
                <div className={styles.title}>Pathway 1</div>
                <ul>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div
                        className={`${styles.line} ${styles.visibilityNone}`}
                      ></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.pathway}>
                <div className={styles.title}>Pathway 1</div>
                <ul>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepper}>
                      <div className={styles.circle}></div>
                      <div
                        className={`${styles.line} ${styles.visibilityNone}`}
                      ></div>
                    </div>
                    <div className={styles.wrap}>
                      <div className={styles.title}>Diploma</div>
                      <div className={styles.text}>
                        Information Technology Engineering
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.textSection}>
            <div className={styles.subTitle}>Abilities & apptitude needed</div>
            <div className={styles.title}>
              Which
              <span className={styles.fontBold}>course I can pursue?</span>
            </div>
            <div className={styles.tabs}>
              <ul>
                <li className={styles.active}>Diploma</li>
                <li>Degree</li>
                <li>Master</li>
                <li>Doctorate</li>
                <li>Others</li>
              </ul>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    PhD in Homeopathic Medicine and Surgery
                  </div>
                  <div className={styles.subTitleItem}>Computer & IT</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                        ₹ 40,000 - 1,00,000 fees/year
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>PG</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>5+ years</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Full Time</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>View Details</div>
              </div>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    PhD in Homeopathic Medicine and Surgery
                  </div>
                  <div className={styles.subTitleItem}>Computer & IT</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                        ₹ 40,000 - 1,00,000 fees/year
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>PG</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>5+ years</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Full Time</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>View Details</div>
              </div>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    PhD in Homeopathic Medicine and Surgery
                  </div>
                  <div className={styles.subTitleItem}>Computer & IT</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                        ₹ 40,000 - 1,00,000 fees/year
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>PG</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>5+ years</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Full Time</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>View Details</div>
              </div>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    PhD in Homeopathic Medicine and Surgery
                  </div>
                  <div className={styles.subTitleItem}>Computer & IT</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                        ₹ 40,000 - 1,00,000 fees/year
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>PG</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>5+ years</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Full Time</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>View Details</div>
              </div>
              <div className={styles.link}> View All Related Courses List</div>
            </div>
          </div>
          <div className={styles.textSection}>
          <div className={styles.subTitle}>Abilities & apptitude needed</div>
            <div className={styles.title}>
            Which are the 
              <span className={styles.fontBold}>best colleges to attend </span>
              to become an Accountant?
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                  Advertisement & Brand Manager
                  </div>
                  <div className={styles.subTitleItem}>Sales & Marketing</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                      Diploma/Degree/Masters/Phd
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Arts/Commerce</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>₹ 6,00,000 - 8,00,000 expense /annum</div>
                    </div>
                   
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.subTitleItem}>9 Courses Options</div>
                  <div className={styles.subTitleItem}>122 Colleges Offering</div>
                  <span className={styles.btnYellow}> View Details</span>
                </div>
              </div>
            </div>
            <div className={styles.link}> View All Related Courses List</div>
            </div>
            <div className={styles.textSection}>
            <div className={styles.title}>
              <div className={styles.textSection}>
                <div className={styles.subTitle}>Typical day at work</div>
                <div className={styles.title}>
                  Which 
                  <span className={styles.fontBold}> industeries are open </span>
                  for an Accountant?
                </div>
                <ul className={styles.text}>
                  <li>
                    <span className={styles.listIndicator}></span>
                    Is Dermatoglyphics testing scientific or Medical basic?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>How effective
                    is an online aptitude test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    What are the benefits of the Brainwonders Aptitude Test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    What are the advantages of the Brainwonders Online Aptitude
                    Test?
                  </li>
                  <li>
                    <span className={styles.listIndicator}></span>
                    How accurate is the dermatoglyphics multiple intelligences
                    test?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.subTitle}>Growth</div>
            <div className={styles.title}>
              Who is an <span className={styles.fontBold}>Accountant?</span>
            </div>
            <p className={styles.text}>
              An accountant is a practitioner of accounting or accountancy.
              Accountants who have demonstrated competency through their
              professional associations' certification exams are certified to
              use titles such as Chartered Accountant, Chartered Certified
              Accountant or Certified Public Accountant, or Registered Public
              Accountant. Such professionals are granted certain
              responsibilities by statute, such as the ability to certify an
              organization's financial statements, and may be held liable for
              professional misconduct. Non-qualified accountants may be employed
              by a qualified accountant, or may work independently without
              statutory privileges and obligations.
            </p>
          </div>

          <div className={styles.textSection}>
            <div className={styles.subTitle}>Growth</div>
            <div className={styles.title}>
              Are there{" "}
              <span className={styles.fontBold}>internships available </span>
              for accountant?
            </div>
            <p className={styles.text}>
              An accountant is a practitioner of accounting or accountancy.
              Accountants who have demonstrated competency through their
              professional associations' certification exams are certified to
              use titles such as Chartered Accountant, Chartered Certified
              Accountant or Certified Public Accountant,
            </p>
          </div>

          <div className={styles.textSection}>
            <div className={styles.subTitle}>Career outlook</div>
            <div className={styles.title}>
              What does{" "}
              <span className={styles.fontBold}>the future look like </span>
              for an accountant?
            </div>
            <p className={styles.text}>
              An accountant is a practitioner of accounting or accountancy.
              Accountants who have demonstrated competency through their
              professional associations' certification exams are certified to
              use titles such as Chartered Accountant, Chartered Certified
              Accountant or Certified Public Accountant, or Registered Public
              Accountant. Such professionals are granted certain
              responsibilities by statute, such as the ability to certify an
              organization's financial statements, and may be held liable for
              professional misconduct. Non-qualified accountants may be employed
              by a qualified accountant, or may work independently without
              statutory privileges and obligations.{" "}
            </p>
          </div>

          <div className={styles.textSection}>
            <div className={styles.title}>
              <span className={styles.fontBold}>Explore related career</span>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.title}>
                  Advertisement & Brand Manager
                  </div>
                  <div className={styles.subTitleItem}>Sales & Marketing</div>
                  <div className={styles.details}>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>
                      Diploma/Degree/Masters/Phd
                      </div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>Arts/Commerce</div>
                    </div>
                    <div className={styles.detailsItem}>
                      <Image src={upArrow} alt="" />
                      <div className={styles.text}>₹ 6,00,000 - 8,00,000 expense /annum</div>
                    </div>
                   
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.subTitleItem}>9 Courses Options</div>
                  <div className={styles.subTitleItem}>122 Colleges Offering</div>
                  <span className={styles.btnYellow}> View Details</span>
                </div>
              </div>
            </div>
          </div>
          </div>



         
      
      </Grid>
    </Grid>
  );
}
