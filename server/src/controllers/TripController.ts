import { Request, Response } from 'express';
import Trip from './../database/Trip';

// - GET - /alltrip # returns all trips
export let allTrip = (req: Request, res: Response) => {
	let trips = Trip.find((err: any, trips: any) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send(trips);
		}
	})
}

// - GET - /trip/{1} returns a trip with id of 1
export let getTrip = (req: Request, res: Response) => {
	Trip.findById(req.params.id, (err: any, trip: any) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send(trip);
		}
	})
}

// - PUT - /Commuter # inserts a new trip into the table
export let addTrip = (req: Request, res: Response) => {
	let trip = new Trip(req.body);

	trip.save((err: any) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send(trip);
		}
	})
}

// - DELETE - /trip/{1} # deletes a trip with id of 1
export let deleteTrip = (req: Request, res: Response) => {
	Trip.deleteOne({ _id: req.params.id }, (err: any) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send("Successfully deleted trip");
		}
	})
}

// - POST - /trip/{1} # updates a trip with id of 1
export let updateTrip = (req: Request, res: Response) => {
	Trip.findByIdAndUpdate(req.params.id, req.body, (err: any, trip: any) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send("Successfully updated bus");
		}
	})
}