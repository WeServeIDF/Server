import { Request, Response } from 'express';
import { StationDTO } from '../types/stationDTO';

export const getStations = async (req : Request, res : Response) => {
    const hardcodedStation1: StationDTO = {
        timeRange: '12:00-19:00',
        baseName: 'לוטם',
        buildingName: 'ויזידיה',
        officeNumber: 301,
        locationDetails: 'ישר בכיכר, ימינה בשקם ושמאלה לפני החד"א',
        contactName: "עמרי ג'נאח",
        contactPhone: '0503300100'
    }
    const hardcodedStation2: StationDTO = {
        timeRange: '10:00-16:00',
        baseName: 'שלישות רמת גן',
        buildingName: 'סיגלית',
        officeNumber: 456,
        locationDetails: 'להיכנס בשער הראשי ולהמשיך ישר עד הסוף',
        contactName: "מישהו עם שם",
        contactPhone: '0545381648'
    }
    const hardcodedStation3: StationDTO = {
        timeRange: '16:00-23:59',
        baseName: '108 צריפין',
        buildingName: 'השלום',
        officeNumber: 12,
        locationDetails: 'תתקשרו ואכוון',
        contactName: "עוד אחד עם שם",
        contactPhone: '052111110'
    }

    const hardcodedStationsList: StationDTO[] = [hardcodedStation1, hardcodedStation2, hardcodedStation3]
    res.send(hardcodedStationsList);
}