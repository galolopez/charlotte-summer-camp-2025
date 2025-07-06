import React from 'react';
import { useInView } from '../hooks/use-in-view';

const times = [
  '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

const schedule: { [time: string]: (string | null)[] } = {
  '7:00':   [null, 'Wake Up', 'Wake up', 'Wake Up'],
  '8:00':   [null, 'Breakfast', 'Breakfast', 'Breakfast'],
  '9:00':   ['Arrivals', 'Travel', 'Education: Internet Slander', 'Education: Falsehood'],
  '10:00':  ['Arrivals', 'Whitewater', 'Education: Faith', 'of Atheism'],
  '11:00':  ['Arrivals', 'Center', 'That Overcomes...', 'Gospel Worker Forum'],
  '12:00':  ['Lunch', 'Lunch', 'Lunch', 'Lunch'],
  '13:00':  ['Orientation', 'Whitewater', 'Gospel Worker Assessment', 'New Song'],
  '14:00':  ['Eagle Egg Skit', 'Center', 'Outdoor Activities', 'Festival'],
  '15:00':  ['Earth', 'Continued', '(Team Building', 'Gospel Shorts'],
  '16:00':  ['in the Universe', 'Break', 'Games)', 'Fragrance'],
  '17:00':  ['and Us', 'SER Gospel Report', 'Break', 'Fragrance'],
  '18:00':  ['Dinner', 'Dinner', 'Dinner', 'Dinner'],
  '19:00':  ['End of Day', 'Spiritual', 'Prepare for Service', 'End of Day /'],
  '20:00':  [null, 'Movie-Harbin', 'Third Day Service', 'Departures'],
  '21:00':  [null, 'Fragrance', 'Bonfire', null],
  '22:00':  [null, 'End of Day', 'End of Day', null],
};

const getCellColor = (activity: string | null, dayIdx: number) => {
  if (!activity) return '';
  if (activity.toLowerCase().includes('lunch') || 
  activity.toLowerCase().includes('dinner') || 
  activity.toLowerCase().includes('breakfast')) {
    return 'bg-green-100 text-green-900 font-semibold';
  }
  if (activity.toLowerCase().includes('end of day') ||
  activity.toLowerCase().includes('departures') ||
  activity.toLowerCase().includes('arrivals') ||
  activity.toLowerCase().includes('orientation') || 
  activity.toLowerCase().includes('wake') || 
  activity.toLowerCase().includes('travel') || 
  activity.toLowerCase().includes('break') || 
  activity.toLowerCase().includes('festival') || 
  activity.toLowerCase().includes('song')) {
    return 'bg-blue-100 text-blue-900 font-semibold';
  }
  if (activity.toLowerCase().includes('service') || 
  activity.toLowerCase().includes('skit') ||
  activity.toLowerCase().includes('city tour')) {
    return 'bg-amber-100 text-amber-900 font-semibold';
  }
  if (activity.toLowerCase().includes('report') || 
  activity.toLowerCase().includes('forum') || 
  activity.toLowerCase().includes('assessment') ||
  activity.toLowerCase().includes('goal') || 
  activity.toLowerCase().includes('glory') || 
  activity.toLowerCase().includes('atheism') || 
  activity.toLowerCase().includes('internet') || 
  activity.toLowerCase().includes('slander') || 
  activity.toLowerCase().includes('faith')  || 
  activity.toLowerCase().includes('overcomes') ||
  activity.toLowerCase().includes('falsehood')) {
    return 'bg-yellow-100 text-yellow-900 font-semibold';
  }
  if (activity.toLowerCase().includes('movie') ||
  activity.toLowerCase().includes('fragrance'))
  return 'bg-red-100 text-red-900 font-semibold';

  return 'bg-rose-100 text-rose-900 font-semibold';
};

const ItinerarySection = () => {
  const [tableRef, inView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  return (
    <section id="itinerary" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Camp Itinerary
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div
          ref={tableRef}
          className={`overflow-x-auto rounded-lg shadow ring-1 ring-gray-200 transition-opacity duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-amber-100 text-amber-900 px-2 py-3 border-b border-gray-200 text-left">Time</th>
                {days.map(day => (
                  <th key={day} className="bg-amber-100 text-amber-900 px-2 py-3 border-b border-gray-200">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map(time => (
                <tr key={time}>
                  <td className="bg-gray-50 px-2 py-2 border-b border-gray-100 font-semibold">{time}</td>
                  {schedule[time].map((activity, dayIdx) => (
                    <td
                      key={dayIdx}
                      className={`px-2 py-2 border-b border-gray-100 align-top text-center ${getCellColor(activity, dayIdx)} rounded`}
                    >
                      {activity || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
