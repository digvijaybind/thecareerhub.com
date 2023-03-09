import React from 'react';
import styles from "./Modal.module.css";
import {
Modal,Box
} from "@mui/material";
const ModalComp = ({open,toggleModal}) => {
    return (
        <Modal
        open={open}
        onBackdropClick={()=>{debugger; toggleModal()}}
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
    );
};

export default ModalComp;