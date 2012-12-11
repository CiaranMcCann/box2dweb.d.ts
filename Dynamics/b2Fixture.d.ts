/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Collision/init.d.ts" />
/// <reference path="../Collision/b2AABB.d.ts" />
/// <reference path="../Collision/b2RayCastInput.d.ts" />
/// <reference path="../Collision/b2RayCastOutput.d.ts" />
/// <reference path="../Collision/Shapes/b2MassData.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="b2Body.d.ts" />
/// <reference path="b2FilterData.d.ts" />

module Box2D.Dynamics {
	
	/**
	* A fixture is used to attach a shape to a body for collision detection. A fixture inherits its transform from its parent. Fixtures hold additional non-geometric data such as friction, collision filters, etc. Fixtures are created via b2Body::CreateFixture.
	* @warning  you cannot reuse fixtures.
	**/
	export class b2Fixture {

		/**
		* Get the fixture's AABB. This AABB may be enlarge and/or stale. If you need a more accurate AABB, compute it using the shape and the body transform.
		* @return Fiture's AABB.
		**/
		public GetAABB(): b2Collision.b2AABB;

		/**
		* Get the parent body of this fixture. This is NULL if the fixture is not attached.
		* @return The parent body.
		**/
		public GetBody(): b2Body;

		/**
		* Get the density of this fixture.
		* @return Density
		**/
		public GetDensity(): number;

		/**
		* Get the contact filtering data.
		* @return Filter data.
		**/
		public GetFilterData(): b2FilterData;

		/**
		* Get the coefficient of friction.
		* @return Friction.
		**/
		public GetFriction(): number;

		/**
		* Get the mass data for this fixture. The mass data is based on the density and the shape. The rotational inertia is about the shape's origin. This operation may be expensive.
		* @massData This is a reference to a valid b2MassData, if it is null a new b2MassData is allocated and then returned.  Default = null.
		* @return Mass data.
		**/
		public GetMassData(massData?: b2Shapes.b2MassData): b2Shapes.b2MassData;

		/**
		* Get the next fixture in the parent body's fixture list.
		* @return Next fixture.
		**/
		public GetNext(): b2Fixture;

		/**
		* Get the coefficient of restitution.
		* @return Restitution.
		**/
		public GetRestitution(): number;

		/**
		* Get the child shape. You can modify the child shape, however you should not change the number of vertices because this will crash some collision caching mechanisms.
		* @return Fixture shape.
		**/
		public GetShape(): b2Shapes.b2Shape;

		/**
		* Get the type of the child shape. You can use this to down cast to the concrete shape.
		* @return Shape type enum.
		**/
		public GetType(): number;

		/**
		* Get the user data that was assigned in the fixture definition. Use this to store your application specific data.
		* @return User provided data.  Cast to your object type.
		**/
		public GetUserData(): any;

		/**
		* Is this fixture a sensor (non-solid)?
		* @return True if the shape is a sensor, otherwise false.
		**/
		public IsSensor(): bool;

		/**
		* Perform a ray cast against this shape.
		* @output Ray cast results.  This argument is out.
		* @input Ray cast input parameters.
		* @return True if the ray hits the shape, otherwise false.
		**/
		public RayCast(output: b2Collision.b2RayCastOutput, input: b2Collision.b2RayCastInput): bool;

		/**
		* Set the density of this fixture. This will _not_ automatically adjust the mass of the body. You must call b2Body::ResetMassData to update the body's mass.
		* @density The new density.
		**/
		public SetDensity(density: number): void;

		/**
		* Set the contact filtering data. This will not update contacts until the next time step when either parent body is active and awake.
		* @filter The new filter data.
		**/
		public SetFilterData(filter: any): void;

		/**
		* Set the coefficient of friction.
		* @friction The new friction coefficient.
		**/
		public SetFriction(friction: number): void;

		/**
		* Get the coefficient of restitution.
		* @resitution The new restitution coefficient.
		**/
		public SetRestitution(restitution: number): void;

		/**
		* Set if this fixture is a sensor.
		* @sensor True to set as a sensor, false to not be a sensor.
		**/
		public SetSensor(sensor: bool): void;

		/**
		* Set the user data. Use this to store your application specific data.
		* @data User provided data.
		**/
		public SetUserData(data: any): void;

		/**
		* Test a point for containment in this fixture.
		* @p Point to test against, in world coordinates.
		* @return True if the point is in this shape, otherwise false.
		**/
		public TestPoint(p: b2Math.b2Vec2): bool;
	}
}
