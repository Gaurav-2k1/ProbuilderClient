import TempFour from "../Pages/Tempfour/TempFour";
import Tempfirst from "../Pages/Tempone/Tempfirst";
import Tempthree from "../Pages/Tempthree/Tempthree";
import TempSecond from "../Pages/Temptwo/TempSecond";

export const templateData = [
    {
        title: "templateone",
        component: <Tempfirst key={1} />
    },
    {
        title: "templatetwo",
        component: <TempSecond key={2} />
    },
    {
        title: "templatethree",
        component: <Tempthree key={3} />
    },
    {
        title: "templatefour",
        component: <TempFour key={4} />
    }

]
