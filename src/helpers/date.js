export function get30daysPriorToday() {
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - 30));

  return {
    today: formatDate(today),
    priorDate: formatDate(priorDate),
  };
}

export function getThisWeekDate() {
  const curr = new Date();
  const first = curr.getDate();
  -curr.getDay();

  const last = first + 6;

  const firstDay = new Date(curr.setDate(first));
  const lastDay = new Date(curr.setDate(last));

  return {
    startDate: formatDate(firstDay),
    endDate: formatDate(lastDay),
  };
}

export function getNextWeekDate() {
  const date = new Date();
  const nextWeekStart = date.getDate() - date.getDay() + 7;
  const nextWeekFrom = new Date(date.setDate(nextWeekStart));
  const nextWeekEnd = date.getDate() - date.getDay() + 6;
  const nextWeekTo = new Date(date.setDate(nextWeekEnd));

  return {
    startDate: formatDate(nextWeekFrom),
    endDate: formatDate(nextWeekTo),
  };
}

function formatDate(date) {
  return date?.toISOString().split("T")[0];
}
