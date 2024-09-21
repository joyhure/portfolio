/*import React from 'react';
import { BeautifulTimeline, BeautifulTimelineItem } from 'react-beautiful-timeline';
import 'react-beautiful-timeline/dist/style.css';

const TimelineComponent: React.FC = () => {
  return (
    <BeautifulTimeline>
      <BeautifulTimelineItem>ContenuChronologie 1</BeautifulTimelineItem>
      <BeautifulTimelineItem>ContenuChronologie 2</BeautifulTimelineItem>
      <BeautifulTimelineItem>ContenuChronologie 3</BeautifulTimelineItem>
    </BeautifulTimeline>
  );
};

export default TimelineComponent;*/
import type { FC } from 'react';
import {
  BeautifulTimeline as Timeline,
  BeautifulTimelineItem as TimelineItem,
} from 'react-beautiful-timeline';
import dotIcon from '../../assets/dotIcon.svg?url';
import '../career/timeline.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="" style={{ margin: '40px' }}>
      <Timeline
        responsiveWidth={980}
        type="horizontal"
        animation={true}
        passiveLineStyle={{
          background:
            'linear-gradient(90deg, rgba(226, 226, 226, 0.04) -12.5%, #DADADA 49.02%,  rgba(226, 226, 226, 0.04) 105.63%)',
        }}
        activeLineStyle={{
          background:
            'linear-gradient(90deg, rgba(131, 164, 249, 0.04) -12.5%, #A07FFD 49.02%, rgba(131, 164, 249, 0.04) 105.63%)',
        }}
      >
        <TimelineItem
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotText={<h1 className="timelineItemDotText">2004</h1>}
        >
          <div className="timelineItem">
            <h3>Facebook</h3>
            <p>
              An online social media and social networking service based in
              Menio Park, California
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotText={<h1 className="timelineItemDotText">2005</h1>}
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotColor="none"
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">Youtube</h3>
            <p className="timelineItemOpposite ">
              First large-scale video sharing website that makes it easy to
              watch videos online
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotText={<h1 className="timelineItemDotText">2006</h1>}
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
        >
          <div className="timelineItem">
            <h3>Twitter</h3>
            <p>
              A service for friends, family. and coworkers to cimmunicate and
              stay connected through the exchange of quick, frequent messages
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotText={<h1 className="timelineItemDotText">2007</h1>}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">Tumblr</h3>
            <p className="timelineItemOpposite">
              Let's you effortlessly share anything. Post text, phots, quotes,
              links, music, and videos from your browser, phone, desktop, email
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotText={<h1 className="timelineItemDotText">2010</h1>}
        >
          <div className="timelineItem">
            <h3>Instagram</h3>
            <p>
              The home for visual storytelling for everyone from celebreties,
              newrooms and brands to teens, musicians and anyone with a creative
              passion
            </p>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
};