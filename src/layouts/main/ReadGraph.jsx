/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


import {
  BarChart as BChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


const ReadGraph = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("booksRead")) || [];
        setBooks(data);
    }, [])

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
      },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
      }, ${y + height}
    Z`;
    };
  
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
  
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
  
    return (
      <div className="flex my-20 items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BChart data={books}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {books.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BChart>
        </ResponsiveContainer>
      </div>
    );
  };
export default ReadGraph;