import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmStays, cabinCount, numDays }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmStays.length;
  const occupancyRate =
    confirmStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        title="check ins"
        icon={<HiOutlineCalendar />}
        color="indigo"
        value={checkins}
      />
      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
}

export default Stats;
