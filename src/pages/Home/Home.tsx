import EventBox from '@/components/event/EventBox';

import { EVENT_DATA } from '@/constants/eventData';

function Home() {
  return (
    <div>
      <EventBox isShowPeriod={false} events={EVENT_DATA} />
    </div>
  );
}

export default Home;
