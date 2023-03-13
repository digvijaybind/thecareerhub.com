import React from "react";
class HomeFaq extends React.Component {
  render() {
    return (
      <>
      <section className="faq ptb-64">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="font-30 text-center">FAQ</h5>
              <p className="font-18 pt-20 text-center">Frequently Asked Question</p>
            </div>
          </div>  
          {/* <div className="row pt-60">
            <div className="col-md-12">
              <p className="font-18 text-center">Top Asked Questions</p>
            </div>
          </div>   */}
          {/* <div className="row faqtestimonialrow">
              <div className="col-12">
                  <div id="faqCarousel" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                              <div className="carousel-content">
                                  <h3 className="testimonial-faq-q">How to know which career is right for me?</h3>
                                  <p className="testimonial-p pt-20">My son was confused on what to do after 12 Science, everyday his goal changed. We did counselling with Brain Wonders. The councilling was based on finger prints analysis so it was more scientific. My son goal was cleared after councilling and he studied hard for CET and got admission in Engineering college in Mumbai. Thanks Brainwonders for giving clear vision and confidence.</p>
                                   <div className="text-center readm-btn pt-20"><Link target="_blank"  href="#">Read More</Link></div> 
                              </div>
                          </div>
                          <div className="carousel-item ">
                              <div className="carousel-content">
                                  <h3 className="testimonial-faq-q">q2How to know which career is right for me?</h3>
                                  <p className="testimonial-p pt-20">My son was confused on what to do after 12 Science, everyday his goal changed. We did counselling with Brain Wonders. The councilling was based on finger prints analysis so it was more scientific. My son goal was cleared after councilling and he studied hard for CET and got admission in Engineering college in Mumbai. Thanks Brainwonders for giving clear vision and confidence.</p>
                                   <div className="text-center readm-btn pt-20"><Link target="_blank"  href="#">Read More</Link></div>
                              </div>
                          </div>

                          <Link target="_blank"  className="testimonial-prev" href="#faqCarousel" role="button" data-slide="prev">
                          <img src="images/leftfa.png" alt="img" />
                          </Link>
                          <Link target="_blank"  className="testimonial-next" href="#faqCarousel" role="button" data-slide="next">
                          <img src="images/rightfa.png" alt="img" />
                          </Link>
                      </div>
                  </div>
              </div>
              <div className="col-md-12 pt-93">
              <p className="font-18 pt-20 text-center">More FAQ’s</p>
              </div>
          </div>     */}

          <div className="faq-accordian mlr-12">
            <div className="row">
              <div className="col-md-12">
              <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq1" aria-expanded="true">     
                      <span className="faq-que">How to know which career is right for me?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq1" className="faq-ans collapse">
                          <p>We have the ultimate career test which will get you acquainted with your abilities, skills, interests, traits, and strengths; and align your profile with the best-recommended career for you. Once you receive the test results, all that you have to do is let your career take off!</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq2" aria-expanded="true">     
                      <span className="faq-que">When should I start thinking about my career?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq2" className="faq-ans collapse">
                          <p>The time-tested phrase 'Earlier, the better' stands true for initiating your professional journey as well. You can use our career test to get acquainted with your career options, and beginning early will give you ample space and time to explore the various pathways open to you, and help you navigate the industry trends without much stress in the process.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq3" aria-expanded="true">     
                      <span className="faq-que">What should be the main basis of career selection?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq3" className="faq-ans collapse">
                          <p>There are two crucial factors that hold prime importance when it comes to choosing the right career: Your personal qualities and the fast-growing opportunities available in the world. That is why we match your characteristics analysed in our career test only to the careers which offer a bright future.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq4" aria-expanded="true">     
                      <span className="faq-que">How many career options do I really have?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq4" className="faq-ans collapse">
                          <p>We only work with the best of careers for you, and have collated 571 careers across 77 industries till now! But remember, you just need to find the perfect one which will meet all your aspirations and help you flourish.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq5" aria-expanded="true">     
                      <span className="faq-que">What goes into choosing the best college?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq5" className="faq-ans collapse">
                          <p>Your college campus will be open the doors to your career's growth, so naturally, it must be chosen wisely. While there are many things that define the right college for you, make a special note of what your college offers in terms of courses, mentors & faculty, and placements. Also, based on your personal preference, you can take a look at the education fees and location of the institute. You can hop on to colleges to find your future alma mater.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq6" aria-expanded="true">     
                      <span className="faq-que">Out of so many courses, which one should I go for?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq6" className="faq-ans collapse">
                        <p>Depending on the chosen career, your ideal course should have the right equilibrium between theoretical concepts and practical training. So we have shortlisted the most sought after courses that have been seen as highly reliable by many, you find more in the courses section.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq7" aria-expanded="true">     
                      <span className="faq-que">I have already chosen some subjects/ courses, do I still have many options?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq7" className="faq-ans collapse">
                          <p>Of course! A map may show many roads, but they all can lead to your desired destination. Similarly, the majority of careers have many pathways to get to them, so we can assess your existing options and build upon them! In fact, there might be some career options that your chosen subjects/ course already aligns with that one may not know yet.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq8" aria-expanded="true">     
                      <span className="faq-que">Is there a way to substantiate my learning and earn as well?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq8" className="faq-ans collapse">
                          <p>Kudos to you if 'learn and earn' is the way you wish to walk. Explore a plethora of internships, scholarships, distance/ part-time courses on our site and carve out the combinations that meet your goals and schedule.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq9" aria-expanded="true">     
                      <span className="faq-que">How to be sure that on choosing a career, my future is actually secure?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq9" className="faq-ans collapse">
                          <p>Hey! We got your back. It is normal for one to be a little overwhelmed by so many options. But remember, these are also opportunities for you to climb the peak of success. We have some inspirational success stories and valuable client testimonials that will give you the clarity you need. Also, the prospective salary, earnings, and overall career outlook for the future will keep you encouraged and assured.</p>
                   </div>
                </div>
                <hr/>

                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq10" aria-expanded="true">     
                      <span className="faq-que">I want to prepare more seriously/ thoroughly/ and be on top of my game?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq10" className="faq-ans collapse">
                          <p>That's great to know- and we are excited to keep you going. You can: subscribe to newsletters, attend our empowering workshops, take regular counselling with our experts, and use the career test periodically to track progress. And, you are always welcome to visit our website as we keep it constantly updated.</p>
                   </div>
                </div>
                <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq11" aria-expanded="true">     
                      <span className="faq-que">Is it too late to change my career?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq11" className="faq-ans collapse">
                          <p>Hey, if things can always get better, why should you stay away from the path of your growth. Nowadays, industries and job trends are very dynamic, and pathways are multiple. We advise using the career test to understand your current traits and future options, and then take the leap to higher ground. After all, better late than never!</p>
                   </div>
                </div>
                <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq12" aria-expanded="true">     
                      <span className="faq-que">Is the presented information accurate/ What is the basis of available information?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq12" className="faq-ans collapse">
                          <p>Our team of psychologists, career experts and researchers continuously consult and filter through a lot of data, news, updates, facts, figures, surveys, industry professionals' feedback and regularly review it to present only the best, suitable, relevant, and correct information to you. So build your career with confidence!</p>
                   </div>
                </div>
                <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq13" aria-expanded="true">     
                      <span className="faq-que">I think I need more guidance, what should I do?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq13" className="faq-ans collapse">
                          <p>Great, it is always rewarding to be more thorough. So connect with us for a personal guidance session with our counselling professionals. You can also explore your inborn potential and innate characteristics via the U.S. Patented DMIT- which we can help you with.</p>
                   </div>
                </div>
                <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq14" aria-expanded="true">     
                      <span className="faq-que">What educational background do I need to register for the test?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq14" className="faq-ans collapse">
                          <p>The test will actually help you chart your academic journey as well, so as long as you are 7 years old or above, you are welcome to benefit from the career test any time- irrespective of your educational background.</p>
                   </div>
                </div>
                <hr/>
                <div className="accordion">
                   <div data-toggle="collapse" data-target="#faq15" aria-expanded="true">     
                      <span className="faq-que">How does the career test work?</span>
                      <span className="float-right"><img src="images/arrow-down.png" alt="img" /></span>
                   </div>
                   <div id="faq15" className="faq-ans collapse">
                          <p>Our highly popular career test uses your responses to the presented test questions, analyses them to assess your interest, personality, aptitude and matches it with the careers that demand those qualities you possess. To take the career test, just go to our website and click the button to start the test. It will take only 4 minutes to complete it and 2 minutes to get the results. It is one of the most accurate tests on our site that can be taken by being at the ease of your own home!</p>
                   </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}
export default HomeFaq;