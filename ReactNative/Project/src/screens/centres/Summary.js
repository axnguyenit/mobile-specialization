import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ScrollView
} from 'react-native'

import styles from './CentreDetailsStyles'
import Icon, { Icons } from '../../components/icons'
import SummaryImg from '../../assets/images/summary-img.png'
import IconMap from '../../assets/images/ic-map3.png'
import IconCentre from '../../assets/images/ic-centre4.png'
import IconOutdoor from '../../assets/images/ic-outdoor.png'
import IconCalendar from '../../assets/images/ic-calendar-blank.png'
import IconKindi from '../../assets/images/ic-kindi2.png'
import IconPhone from '../../assets/images/ic-phone.png'
import IconMail from '../../assets/images/ic-mail.png'
import IconArrow from '../../assets/images/ic-arrow.png'
import IconEnquiries1 from '../../assets/images/ic-enquiries.png'
import IconEnquiries2 from '../../assets/images/ic-enquiries2.png'
import IconEnquiries3 from '../../assets/images/ic-enquiries3.png'
import IconEnquiries4 from '../../assets/images/ic-enquiries4.png'
import IconEnquiries5 from '../../assets/images/ic-enquiries5.png'
import IconApplications1 from '../../assets/images/ic-applications1.png'
import IconApplications2 from '../../assets/images/ic-applications2.png'
import IconApplications3 from '../../assets/images/ic-applications3.png'
import IconApplications4 from '../../assets/images/ic-applications4.png'
import IconCaret from '../../assets/images/ic-caret.png'
import CentrePhoto1 from '../../assets/images/centre-photo-1.png'
import CentrePhoto2 from '../../assets/images/centre-photo-2.png'
import CentrePhoto3 from '../../assets/images/centre-photo-3.png'

function Summary(props) {
  const [expanded, setExpanded] = useState(false)
  const [rotateX, setRotateX] = useState('180deg')

  const handleCollapse = () => {
    setExpanded(!expanded)
    rotateX === '0deg' ? setRotateX('180deg') : setRotateX('0deg')
  }
  return (
    <ScrollView style={styles.tabView}>
      <View style={styles.tabViewContent}>
        <TouchableOpacity
          onPress={handleCollapse}
          style={styles.summaryCollapse}
        >
          <Image source={SummaryImg} style={styles.summaryImg} />
          <View style={styles.summaryName}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, lineHeight: 24 }}>
              Goodstart Early Learning ABC
            </Text>
            <Text style={{ color: '#36BF57' }}>• Avtive</Text>
          </View>
          <Image
            style={[
              styles.summaryIconCollapse,
              {
                transform: [{ rotateX: rotateX }]
              }
            ]}
            source={IconCaret}
          />
        </TouchableOpacity>
        {expanded && (
          <View>
            <View style={styles.summaryExpanded}>
              <Text style={styles.summaryHeading}>General Information</Text>
              <View style={styles.summaryGeneral}>
                <Image source={IconMap} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  221 Ferrars Street, South Melbourne, VIC 3205
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconCentre} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  Goodstart Early Learning
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconOutdoor} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>Centre-based Care</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image
                  source={IconCalendar}
                  style={styles.summaryGeneralIcon}
                />
                <Text style={styles.summaryGeneralText}>01 January 2012</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconKindi} style={styles.summaryGeneralIcon} />
                <Text
                  style={styles.summaryGeneralText}
                  style={[
                    styles.summaryType,
                    { backgroundColor: '#E9F4FF', color: '#32A4FC' }
                  ]}
                >
                  KindiCare Basic
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.summaryHeading}>Contact Info</Text>
              <View style={styles.summaryGeneral}>
                <Image source={IconPhone} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>1300 001 154</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconMail} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  kha.nguyen01.it@gmail.com
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconArrow} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  https://movies-ax.netlify.app/
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <EnquiriesSummary />
      <ApplicationsSummary />
      <CentrePhotos />
    </ScrollView>
  )
}

function EnquiriesSummary(props) {
  return (
    <View>
      <View style={styles.tabViewContent}>
        <Text
          style={[
            styles.summaryHeading,
            {
              borderBottomColor: '#F2F2F2',
              borderBottomWidth: 1,
              paddingBottom: 10
            }
          ]}
        >
          Enquiries Summary
        </Text>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image source={IconEnquiries1} style={styles.summaryEnquiryIcon} />
            <Text style={styles.summaryEnquiryText}>Total Enquiries</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image source={IconEnquiries2} style={styles.summaryEnquiryIcon} />
            <Text style={styles.summaryEnquiryText}>More Information</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image source={IconEnquiries3} style={styles.summaryEnquiryIcon} />
            <Text style={styles.summaryEnquiryText}>Check for Vacancies</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image source={IconEnquiries4} style={styles.summaryEnquiryIcon} />
            <Text style={styles.summaryEnquiryText}>Book a Tour or Visit</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image source={IconEnquiries5} style={styles.summaryEnquiryIcon} />
            <Text style={styles.summaryEnquiryText}>Fee Information</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
      </View>
    </View>
  )
}

function ApplicationsSummary(props) {
  return (
    <View>
      <View style={styles.tabViewContent}>
        <Text
          style={[
            styles.summaryHeading,
            {
              borderBottomColor: '#F2F2F2',
              borderBottomWidth: 1,
              paddingBottom: 10
            }
          ]}
        >
          Applications Summary
        </Text>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image
              source={IconApplications1}
              style={styles.summaryEnquiryIcon}
            />
            <Text style={styles.summaryEnquiryText}>Open Applications</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image
              source={IconApplications2}
              style={styles.summaryEnquiryIcon}
            />
            <Text style={styles.summaryEnquiryText}>
              Total applications value
            </Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image
              source={IconApplications3}
              style={styles.summaryEnquiryIcon}
            />
            <Text style={styles.summaryEnquiryText}>Total Waitlisted</Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
        <View style={styles.summaryEnquiry}>
          <View style={[styles.summaryGeneral, { alignItems: 'center' }]}>
            <Image
              source={IconApplications4}
              style={styles.summaryEnquiryIcon}
            />
            <Text style={styles.summaryEnquiryText}>Waitlist Value </Text>
          </View>
          <Text style={[styles.summaryEnquiryText, { fontWeight: 'bold' }]}>
            192
          </Text>
        </View>
      </View>
    </View>
  )
}

function CentrePhotos(props) {
  return (
    <View>
      <View style={styles.tabViewContent}>
        <Text
          style={[
            styles.summaryHeading,
            {
              borderBottomColor: '#F2F2F2',
              borderBottomWidth: 1,
              paddingBottom: 10
            }
          ]}
        >
          Centre Photos
        </Text>
        <View style={styles.centrePhotos}>
          <TouchableOpacity>
            <Image style={styles.centrePhoto} source={CentrePhoto1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.centrePhoto} source={CentrePhoto2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.centrePhoto} source={CentrePhoto3} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.centrePhotoMore}>
            <Image style={styles.centrePhoto} source={CentrePhoto2} />
            <Text style={styles.photoLayout}>+ 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Summary
