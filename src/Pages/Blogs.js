import React from 'react'

export default function Blogs() {
  return (
    <div className='space-y-9'>
      <div className='w-1/2 mx-auto'>
        <h1 className="text-4xl text-center text-gray-500">Difference between javascript and nodejs</h1>
        <p>JavaScript is a programming language whereas nodejs is js runtime that works via v8 chrome engine.the purpose of nodejs is to handle backend using js.node also uses c++ for its own purposes.but javascript is a laguage that gives life to a applications ui.it also have other powerfull features rather than hadnling on backend.Node JS mainly used for accessing or running any operating system for non-blocking operation An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system. JavaScript can run in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). Whereas Node JS only support the V8 engine. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. </p>
      </div>
      <div className='w-1/2 mx-auto'>
        <h1 className="text-4xl text-center text-gray-500"> When should you use nodejs and when should you use mongodb</h1>
        <p>for making nonparallel stack from a server, client-side processing, realtime processing, high performence and scalibitly applications like messeging application i should use nodejs.it can carry a heavy load realtime.on the other hand.it shoudnt be used on a blog or something similer to it.mongo db is a nosql database made for highly scalibitly applications. if project includes Integrating large amounts of diverse data,Describing complex data structures that evolve,Delivering data in high-performance applications,hybrid apllication then one should use mongo.although it is general-purpose database that can provide many benefits to your application development process.</p>
      </div>
      <div className='w-1/2 mx-auto'>
        <h1 className="text-4xl text-center text-gray-500">  Differences between sql and nosql databases.</h1>
        <p>SQL databases are relational, NoSQL databases are non-relational.sql keeps data as table column but no sql tracks data as json like format.which has key value pair to process data or graph, or wide-column stores.Some examples of SQL databases include MySQL, Oracle, PostgreSQL, and Microsoft SQL Server. NoSQL database examples include MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j, and CouchDB.</p>
      </div>
      <div className='w-1/2 mx-auto'>
        <h1 className="text-4xl text-center text-gray-500">What is the purpose of jwt and how does it work.</h1>
        <p>json web token are made to share security info between to domains or parties like client and server.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.it has payloads that contains claims.and signature which ensures that the token hasn't been altered </p>
      </div>

    </div>
  )
}
