
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
            {/* <h2 className="text-6xl text-[#9538E2] text-center">No Data Found!!</h2> */}
            <div className="w-9/12 mx-auto my-4 bg-slate-50 rounded-2xl">
                <div className="py-8">
                    <h2 className="text-2xl font-bold">Statistics</h2>
                </div>

                <div className="flex justify-center items-center">
                    
                <BarChart
                    width={1200}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </div>
            </div>


        </div>
    );
};

export default Statistics;