import { Card } from "flowbite-react";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 bg-sky-300 max-w-sm mx-auto rounded-2xl p-2 text-center">Welcome to Blogs</h1>
      <div className="lg:grid grid-cols-3 gap-5">
      <div className="max-w-sm">
        <Card horizontal={true} className="bg-orange-100">
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ans: After successful user authentication an authentication server
            issued both tokens.An access token is a credential that allows
            access to protected resources, it's a short lived token. When the
            original access token expires then a refresh token used to obtain
            new access tokens. It helps maintain user sessions without requiring
            frequent authentication.
          </p>
        </Card>
      </div>
      <div className="max-w-sm">
        <Card horizontal={true} className="bg-lime-200">
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            Compare SQL and NoSQL databases?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ans: SQl means Structured Query Language where Non SQl is means not
            only SQL.SQl databases follow a relational data model where Non SQL
            are not.SQL databases are table-oriented, with fixed columns and
            rows where Non SQl databases are document-oriented, key-value pairs,
            columnar, or graph-based.SQL databases used for structured data
            where NoSQL databases are flexible.
          </p>
        </Card>
      </div>
      <div className="max-w-sm">
        <Card horizontal={true} className="bg-red-200">
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            What is express js? What is Nest JS ?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ans: Express js is a web framework for Node js.It provides a simple
            and flexible way to handle Http requests and build web APIs.Its is
            more easy and cleaner code than raw Node js. Next JS is a JavaScript
            framework that allows us to create user-friendly and fast static
            websites and static web applications with React.
          </p>
        </Card>
      </div>
      <div className="max-w-sm">
        <Card horizontal={true} className="bg-slate-200">
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            What is MongoDB aggregate and how does it work ?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ans: The MongoDB aggregate framework is a feature that allows us to
            perform advanced data processing and analysis on MongoDB
            collections. It uses a pipeline approach, where we define stages and
            operators to manipulate and transform the data.
          </p>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Blogs;
