import { notificationsRepository } from 'src/automation/settings';

class NotifcationsTaskRepository {
  async getNotificationSms(mobile: string) {
    const response = await notificationsRepository.findNotification(mobile);
    return response;
  }
}

export default new NotifcationsTaskRepository();
