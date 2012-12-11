/// <reference path="b2Fixture.d.ts" />

module Box2D.Dynamics {

	/**
	* Implement this class to provide collision filtering. In other words, you can implement this class if you want finer control over contact creation.
	**/
	export class b2ContactFilter {

		/**
		* Return true if the given fixture should be considered for ray intersection. By default, userData is cast as a b2Fixture and collision is resolved according to ShouldCollide.
		* @note This function is not in the box2dweb.as code -- might not work.
		* @see b2World.Raycast()
		* @see b2ContactFilter.ShouldCollide()
		* @userData User provided data.  Comments indicate that this might be a b2Fixture.
		* @return True if the fixture should be considered for ray intersection, otherwise false.
		**/
		public RayCollide(userData: any): bool;

		/**
		* Return true if contact calculations should be performed between these two fixtures.
		* @warning For performance reasons this is only called when the AABBs begin to overlap.
		* @fixtureA b2Fixture potentially colliding with fixtureB.
		* @fixtureB b2Fixture potentially colliding with fixtureA.
		* @return True if fixtureA and fixtureB probably collide requiring more calculations, otherwise false.
		**/
		public ShouldCollide(fixtureA: b2Fixture, fixtureB: b2Fixture): bool;
	}
}